export function Scheduled() {
    const solicitudes = [
        {
            nombre: 'Marcela Jimenez',
            materia: 'Matemáticas',
            imagen: '/images/photoSmall.png'
        },
        {
            nombre: 'Cristian Castro',
            materia: 'Física',
            imagen: '/images/photoSmall.png'
        },
        // Agregar más objetos según sea necesario
    ];
    return (
        <div className="card mb-3" style={{ maxWidth: '450px' }} >
            <div className="card-header">
                <h5 className="m-0">Tutorias programadas</h5>
            </div>
            {solicitudes.map((solicitud, index) => (
                <div key={index} className="row g-0">
                    <div className="d-flex text-center align-items-center justify-content-center w-100">
                        <div className="col-2">
                            <img src={solicitud.imagen} className="img-fluid rounded-circle" alt="Edgar Díaz" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-6">
                            <div className="card-title my-1"><nobr>{solicitud.nombre}</nobr></div>
                            <div className="card-text" style={{ marginTop: '-5px' }}><small className="text-muted">{solicitud.materia}</small></div>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-light">Cancelar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}