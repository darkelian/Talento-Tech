const Person = require("../models/peopleModel");
const Student = require("../models/studentModel");
const RegisterPeopleDTO = require("../dtos/requestPeople");

//Create a Student
exports.newStudent = async (req, res, next) => {
    try {
        const studentDTO = new RegisterPeopleDTO(req.body);

        const person = await Person.create(studentDTO);

        const student = await Student.create({
            studentId: studentDTO.studentId,
            personId: person.id
        });

        res.status(201).json({
            success: true,
            message: "Student created at BD.",
            person,
            student
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//Query all students
exports.getStudents = async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Person]
        });
 /*           {
            include: [{
                model: Person,
                as: 'person'
            }]
        });
*/
        if (!students || students.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Information no found at BD."
            });
        }

        res.status(200).json({
            success: true,
            students
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Query a student by Id
exports.getStudentById = async (req, res, next) => {
    const id = req.params.id;  //id viene en la ruta o el navegador con params

    try {
        const student = await Student.findByPk(id, {
            include: [Person] 
        });

        if (!student) {
            return next(res.status(404).json({
                success: false,
                message: `Student no found in BD: ${id}`
            }));
        } else {
            return res.status(200).json({
                success: true,
                student
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

//Update a Student
exports.updateStudent = async (req, res, next) => {
    const id = req.params.id;
    const student = await Student.findByPk(id);

    if (!student) {
        return next(`Student no found at BD with Id: ${id}`, 404);
    }

    const person = await Person.findByPk(student.personId);

    if (!person) {
        return next(`Student data no found at BD with Id: ${student.personId}`, 404);
    }

    try {
        await person.update(req.body, {
            where: { id: person.id }
        });

        res.status(200).json({
            success: true,
            message: "Student update at BD.",
            person,
            student
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

//Delete a Student
exports.deleteStudent = async (req, res, next) => {
    const studentId = req.params.id;
    
    const student = await Student.findByPk(studentId, {
        include: [Person] 
    });

    if (!student) {
        return next(`Student data no found at BD with Id: ${student.personId}`, 404);
    }

    try {
        await student.destroy({ where: { studentId } });

        //Person associated with student
        if (student.Person) {
            await student.Person.destroy({ where: { personId: student.personId} });
        }

        res.status(200).json({
            success: true,
            message: "Student and associated person erased from BD."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};