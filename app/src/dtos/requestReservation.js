// DOTs: Patrón de Transferencia de datos. Describir cómo recibe datos y los expone en sus capas. 
class RegisterReservationDTO {
    date;
    date_start;
    date_end;
    cancelled;

    constructor(data){
        this.date = data.date;
        this.date_start = data.date_start;
        this.date_end = data.date_end;
        this.cancelled = data.cancelled;
    }
};
