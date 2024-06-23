// DOTs: Patrón de Transferencia de datos. Describir cómo recibe datos y los expone en sus capas. 

class RegisterPeopleDTO {
    names;
    lastNames;
    typeDocument;
    numberDocument;
    email;
    gender;
    birthdate;
    phone;
    password;

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
    }
};
