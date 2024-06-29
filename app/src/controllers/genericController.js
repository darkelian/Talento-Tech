const DocumentTypeEnum = require("../models/documentTypeEnum");
const GenderEnum = require("../models/genderEnum");

//Query all reservations
exports.getDocumentType = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            DocumentTypeEnum
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Query all reservations
exports.getGender = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            GenderEnum
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};