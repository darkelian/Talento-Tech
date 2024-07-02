const Person = require("../models/peopleModel");
const Tutor = require("../models/tutorModel");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const RegisterTutorDTO = require("../dtos/requestTutor");

// Create a Tutor
exports.newTutor = async (req, res, next) => {
    try {
        const tutorDTO = new RegisterTutorDTO(req.body);
        const { email, password, ...personData } = tutorDTO;

        let user = await User.findOne({ where: { username: email } });
        if (user) {
            if (user.rolName !== 'tutor') {
                user.rolName = 'tutor';
                await user.save();
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = await User.create({ username: email, password: hashedPassword, rolName: 'tutor' });
        }

        let person = await Person.findOne({ where: { email: email } });
        if (!person) {
            person = await Person.create({ email, userId: user.id, ...personData });
        }

        const tutor = await Tutor.create({ personId: person.id, ...personData });

        res.status(201).json({
            success: true,
            message: "Tutor created at BD.",
            person,
            tutor
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Query all Tutors
exports.getAllTutors = async (req, res, next) => {
    try {
        const tutors = await Tutor.findAll({ include: [Person] });

        if (!tutors || tutors.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Information not found at BD."
            });
        }

        res.status(200).json({
            success: true,
            tutors
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Query a Tutor by Id
exports.getTutorById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const tutor = await Tutor.findByPk(id, { include: [Person] });

        if (!tutor) {
            return res.status(404).json({
                success: false,
                message: `Tutor not found in BD: ${id}`
            });
        } else {
            return res.status(200).json({
                success: true,
                tutor
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update a Tutor
exports.updateTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
        return res.status(404).json({
            success: false,
            message: `Tutor not found at BD with Id: ${id}`
        });
    }

    const person = await Person.findByPk(tutor.personId);

    if (!person) {
        return res.status(404).json({
            success: false,
            message: `Tutor data not found at BD with Id: ${tutor.personId}`
        });
    }

    try {
        await person.update(req.body);
        res.status(200).json({
            success: true,
            message: "Tutor updated at BD.",
            person,
            tutor
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete a Tutor
exports.deleteTutor = async (req, res, next) => {
    const tutorId = req.params.id;

    const tutor = await Tutor.findByPk(tutorId, { include: [Person] });

    if (!tutor) {
        return res.status(404).json({
            success: false,
            message: `Tutor data not found at BD with Id: ${tutorId}`
        });
    }

    try {
        await tutor.destroy();

        if (tutor.Person) {
            await tutor.Person.destroy();
        }

        res.status(200).json({
            success: true,
            message: "Tutor and associated person erased from BD."
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
