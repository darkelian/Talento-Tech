const Person = require("../models/peopleModel");
const Tutor = require("../models/tutorModel");
const RegisterTutorDTO = require("../dtos/requestTutor");

//Create a Tutor
exports.newTutor = async (req, res, next) => {
    try {
        const tutorDTO = new RegisterTutorDTO(req.body);

        const person = await Person.create(tutorDTO);
        
        const tutor = await Tutor.create({
            tutorId: tutorDTO.tutorId,
            profession: tutorDTO.profession,
            personId: person.id
        });

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

//Query all Tutors
exports.getAllTutors = async (req, res, next) => {
    try {
        const tutors = await Tutor.findAll({
            include: [Person]
        });
 
        if (!tutors || tutors.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Information no found at BD."
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

//Query a Tutor by Id
exports.getTutorById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const tutor = await Tutor.findByPk(id, {
            include: [Person] 
        });

        if (!tutor) {
            return next(res.status(404).json({
                success: false,
                message: `Tutor no found in BD: ${id}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                tutor
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Update a Tutor
exports.updateTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
        return next(`Tutor no found at BD with Id: ${id}`, 404);
    }

    const person = await Person.findByPk(tutor.personId);

    if (!person) {
        return next(`Tutor data no found at BD with Id: ${tutor.personId}`, 404);
    }

    try {
        await person.update(req.body, {
            where: { id: person.id }
        });

        res.status(200).json({
            success: true,
            message: "Tutor update at BD.",
            person,
            tutor
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//Delete a Tutor
exports.deleteTutor = async (req, res, next) => {
    const tutorId = req.params.id;
    
    const tutor = await Tutor.findByPk(tutorId, {
        include: [Person] 
    });

    if (!tutor) {
        return next(`Tutor data no found at BD with Id: ${tutor.personId}`, 404);
    }

    try {
        await tutor.destroy({ where: { tutorId } });

        //Person associated with Tutor
        if (tutor.Person) {
            await tutor.Person.destroy({ where: { personId: tutor.personId} });
        }

        res.status(200).json({
            success: true,
            message: "Tutor and associated person erased from BD."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};