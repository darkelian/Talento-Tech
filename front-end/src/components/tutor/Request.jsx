import { useEffect, useState } from "react";
import { fetchRequestsByTutorId } from "../services/api";
import { useSelector } from "react-redux";

export function Request() {
    const user = useSelector((state) => state.user.user);
    const [requests, setRequests] = useState([])
    useEffect(() => {
        const loadRequests = async () => {
            try {

                const data = await fetchRequestsByTutorId(user.id);

                setRequests(data);
            } catch (error) {
                console.error(error);
            }
        };
        loadRequests();
    }, []);

    return (
        <div className="card mb-3" style={{ minWidth: '400px' }} >
            <h5 className="card-header">Solicitudes de tutorias</h5>
            {requests.map((request, index) => (
                <div key={index} className="row g-0">
                    <div className="d-flex text-center align-items-center justify-content-center w-100">
                        <div className="col-3">
                            <img src={`https://ui-avatars.com/api/?name=${request.Student.Person.names}+${request.Student.Person.lastNames}&background=random`} className="img-fluid rounded-circle" alt={`${request.Student.Person.names} ${request.Student.Person.lastNames}`} style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-3">
                            <div className="card-title my-1"><nobr>{request.Student.Person.names} {request.Student.Person.lastNames}</nobr></div>
                            <div className="card-text" style={{ marginTop: '-5px' }}><small className="text-muted">{request.subjects}</small></div>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-light">Rechazar</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-dark">Aceptar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}