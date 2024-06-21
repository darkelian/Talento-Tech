export function Request() {
    const requests = [
        {
            name: 'Camilo Gómez',
            subjects: 'Matemáticas',
            image: '/images/photoSmall.png'
        },
        {
            name: 'Juan Pérez',
            subjects: 'Física',
            image: '/images/photoSmall.png'
        },
        {
            name: 'Andrea Nieto',
            subjects: 'Cálculo',
            image: '/images/photoSmall.png'
        },
        {
            name: 'Bonifacio Sanclemente',
            subjects: 'Aritmética',
            image: '/images/photoSmall.png'
        },
        // Agregar más objetos según sea necesario
    ];
    return (
        <div className="card mb-3" style={{ minWidth: '400px' }} >
            <h5 className="card-header">Solicitudes de tutorias</h5>
            {requests.map((solicitud, index) => (
                <div key={index} className="row g-0">
                    <div className="d-flex text-center align-items-center justify-content-center w-100">
                        <div className="col-3">
                            <img src={solicitud.image} className="img-fluid rounded-circle" alt="Edgar Díaz" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-3">
                            <div className="card-title my-1"><nobr>{solicitud.name}</nobr></div>
                            <div className="card-text" style={{ marginTop: '-5px' }}><small className="text-muted">{solicitud.subjects}</small></div>
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