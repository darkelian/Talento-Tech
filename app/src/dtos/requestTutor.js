// DOTs: Patrón de Transferencia de datos. Describir cómo recibe datos y los expone en sus capas. 
class RegisterTutorDTO {
    names;
    lastNames;
    typeDocument;
    numberDocument;
    email;
    gender;
    birthdate;
    phone;
    password;
    profesion;

    constructor(data){
        this.names = data.names;
        this.lastNames = data.lastNames;
        this.typeDocument = data.typeDocument;
        this.numberDocument = data.numberDocument;
        this.email = data.email;
        this.gender = data.gender;
        this.birthdate = data.birthdate;
        this.phone = data.phone;
        this.password = data.password;
        this.profesion = data.profesion;
    }
};
