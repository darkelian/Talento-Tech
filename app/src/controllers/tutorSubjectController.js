const Tutor = require("../models/tutorModel");
const Subject = require("../models/subjectModel");
const TutorSubject = require("../models/tutorSubjectModel");
const RegisterTutorSubjectDTO = require("../dtos/requestTutorSubject");

//Create a TutorSubject
exports.newTutorSubject = async (req, res, next) => {

    try {

        const tutorSubjectDTO = new RegisterTutorSubjectDTO(req.body);

        const tutor = await Tutor.findByPk(tutorSubjectDTO.tutorId)

        if (!tutor) {
            return next(res.status(404).json({
                success: false,
                message: `Tutor not found in BD: ${id}`
            }));
        }

        const subject = await Subject.findByPk(tutorSubjectDTO.subjectId)

        if (!subject) {
            return next(res.status(404).json({
                success: false,
                message: `Subject not found at DB with id: ${id}`
            }));
        }

        const tutorSubject = await TutorSubject.create(tutorSubjectDTO);

        res.status(201).json({
            success: true,
            message: "Tutorsubject created at DB.",
            tutorSubject
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//Query the tutor's subject by tutor's id
exports.getTutorSubjectByTutorId = async (req, res, next) => {
    const id = req.params.id;  //id viene en la ruta o el navegador con params

    try {
        const tutor = await Tutor.findByPk(id)

        if (!tutor) {
            return next(res.status(404).json({
                success: false,
                message: `Tutor not found at BD with id: ${id}`
            }));
        }

        const tutorSubject = await TutorSubject.findAll({
            where: {
                tutorId: id
            }, 
            include: [ Subject ]
        });

        if (!tutorSubject) {
            return next(res.status(404).json({
                success: false,
                message: `tutorSubject not found at DB with id: ${id}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                tutorSubject
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Delete a tutorSubject by id
exports.deleteTutorSubject = async (req, res, next) => {
    const tutorSubjectId = req.params.id;
    
    const tutorSubject = await Student.findByPk(tutorSubjectId)

    if (!tutorSubject) {
        return next(`TutorSubject not found at DB with Id: ${tutorSubjectId}`, 404);
    }

    try {
        await tutorSubject.destroy({ where: { tutorSubjectId } });

        res.status(200).json({
            success: true,
            message: "TutorSubject erased from DB."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};