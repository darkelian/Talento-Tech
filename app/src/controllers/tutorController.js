const Tutor = require("../models/tutorModel");
const RegisterTutorDTO = require("../dtos/requestTutor");

//Create a tutor
exports.newTutor = async (req, res, next) => {
    try {
        const tutorDTO = new RegisterTutorDTO(req.body);

        const tutor = await Tutor.create(tutorDTO);

        res.status(201).json({
            success: true,
            message: "El siguiente tutor fue creado en la BD.",
            tutor
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//Query all tutors
exports.getTutors = async (req, res, next) => {
    const tutors = await Tutor.findAll();

    if (!tutors) {
        return next("Informacion no encontrada", 404);
    }

    res.status(200).json({
        success: true,  
        tutors
    })
};

//Query a tutor by Id
exports.getTutorById = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
        return next(`No se encuentra tutor con Id: ${id}`, 404);
    }

    res.status(200).json({
        success: true,
        tutor
    })
};

//Update a tutor
exports.updateTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
        return next(`No se encuentra tutor con Id: ${id}`, 404);
    }

    try {
        await Tutor.update(req.body, {
            where: { id }
        });

        res.status(200).json({
            success: true,
            message: "Tutor actualizado en la BD.",
            tutor
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//Delete a tutor
exports.deleteTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
        return next(`No se encuentra tutor con Id: ${id}`, 404);
    }

    try {
        await Tutor.destroy({ where: { id } });

        res.status(200).json({
            success: true,
            message: "Tutor se elimino de BD."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};