export function Solicitudes() {
    const solicitudes = [
        {
            nombre: 'Camilo Gómez',
            materia: 'Matemáticas',
            imagen: '/images/photoSmall.png'
        },
        {
            nombre: 'Juan Pérez',
            materia: 'Física',
            imagen: '/images/photoSmall.png'
        },
        {
            nombre: 'Andrea Nieto',
            materia: 'Cálculo',
            imagen: '/images/photoSmall.png'
        },
        {
            nombre: 'Bonifacio Sanclemente',
            materia: 'Aritmética',
            imagen: '/images/photoSmall.png'
        },
        // Agregar más objetos según sea necesario
    ];
    return (
        <div className="card mb-3" style={{ minWidth: '400px' }} >
            <h5 className="card-header">Solicitudes de tutorias</h5>
            {solicitudes.map((solicitud, index) => (
                <div key={index} className="row g-0">
                    <div className="d-flex text-center align-items-center justify-content-center w-100">
                        <div className="col-3">
                            <img src={solicitud.imagen} className="img-fluid rounded-circle" alt="Edgar Díaz" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-3">
                            <div className="card-title my-1"><nobr>{solicitud.nombre}</nobr></div>
                            <div className="card-text" style={{ marginTop: '-5px' }}><small className="text-muted">{solicitud.materia}</small></div>
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