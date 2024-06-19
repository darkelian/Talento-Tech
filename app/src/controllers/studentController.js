const Student = require("../models/studentModel");

//Crear un Student
exports.newStudent = async(req, res, next) => {

    const student = await Student.create(req.body);

    res.status(201).json({  
        success: true,
        message: "El siguiente student fue creado en la BD.",
        student
    })
};

//Consutar todos los students
exports.getStudents = async (req, res, next) => {
    const students = await Student.findAll();  

    if (!students) {
        return next("Informacion no encontrada", 404);
    }

    res.status(200).json({
        success: true,  //mensaje de éxito
        students  //Lista de students encontrados en la BD
    })
};

//Consutar un student by Id
exports.getStudentById = async (req, res, next) => {
    const student = await Student.findByPk(req.params.id);  

    if (!student) {
        return next("No se encuentra student con Id", 404);
    }

    res.status(200).json({
        success: true,  
        student
    })
};

//Update un Student
exports.updateStudent = async (req, res, next) => {
    const student = await Student.findByPk(req.params.id);  //id viene en la ruta o el navegador con params
    
    if (!student){
        return next("Student no encontrado", 404);
    }

    await student.update(req.body);

    res.status(200).json({
        success: true,
        message: "Student actualizado en la BD.",
        student
    })
};

//Delete un Student
exports.deleteStudent = async (req, res, next) => {
    const student = await Student.findByPk(req.params.id);  
    
    if (!student){
        return next("Student no encontrado", 404);
    }

    await student.destroy();  

    res.status(200).json({
        success: true,
        message: "Student se elimino de BD."
    })
};