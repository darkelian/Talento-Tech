const Student = require("../models/studentModel");
const Tutor = require("../models/tutorModel");
const Reservation = require("../models/reservationModel");
const ReservationType = require("../models/reservationTypeModel");
const RegisterReservationDTO = require("../dtos/requestReservation");
const People = require("../models/peopleModel");

//Create a Reservation
exports.newReservation = async (req, res, next) => {

    try {
        const reservationDTO = new RegisterReservationDTO(req.body);

        const reservation = await Reservation.create(reservationDTO);

        res.status(201).json({
            success: true,
            message: "Reservation created in DB.",
            reservation
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//Query all reservations
exports.getAllReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.findAll()

        if (!reservations || reservations.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Reservations not found in BD."
            });
        }

        res.status(200).json({
            success: true,
            reservations
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Query a reservation by Id
exports.getReservationById = async (req, res, next) => {
    const id = req.params.id;  //id viene en la ruta o el navegador con params

    try {
        const reservation = await Reservation.findByPk(id)

        if (!reservation) {
            return next(res.status(404).json({
                success: false,
                message: `Reservation not found in DB with Id: ${id}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                reservation
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Query a reservations by tutorId
exports.getReservationsByTutorId = async (req, res, next) => {
    const tutorId = req.params.id;  //id viene en la ruta o el navegador con params

    try {
        const reservations = await Reservation.findAll({
            where: { tutorId: tutorId },
            include: [
                { model: ReservationType },
                {
                    model: Student,
                    include: [{ model: People }] // Incluye la tabla People asociada al modelo Student
                }
            ]
        });

        if (!reservations) {
            return next(res.status(404).json({
                success: false,
                message: `Reservations not found in DB with Id: ${tutorId}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                reservations
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Query reservations by studentId
exports.getReservationsByStudentId = async (req, res, next) => {
    const studentId = req.params.id;  //id viene en la ruta o el navegador con params

    try {
        const reservations = await Reservation.findAll({
            where: { studentId: studentId },
            include: [ReservationType, Tutor]
        });

        if (!reservations) {
            return next(res.status(404).json({
                success: false,
                message: `Reservations not found in DB with Id: ${studentId}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                reservations
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Update a reservation
exports.updateReservation = async (req, res, next) => {
    const id = req.params.id;
    const reservation = await Reservation.findByPk(id);

    if (!reservation) {
        return next(`Reservation not found in DB with Id: ${id}`, 404);
    }

    try {

        await reservation.update(req.body)

        res.status(200).json({
            success: true,
            message: "Reservation update in DB.",
            reservation
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//Delete a Reservation
exports.deleteReservation = async (req, res, next) => {
    const id = req.params.id;

    const reservation = await Reservation.findByPk(id)

    if (!reservation) {
        return next(`Reservation not found in DB with Id: ${id}`, 404);
    }

    try {
        await reservation.destroy({ where: { id } });

        res.status(200).json({
            success: true,
            message: "Reservation erased from DB."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};