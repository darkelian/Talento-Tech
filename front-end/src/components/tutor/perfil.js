export function Perfil() {
    const tutor = {
        nombre: 'Edgar Díaz Murillo',
        imagen: '/images/photoSmall.png',
        fechaInicio: 'enero de 2024',
        descripcion: 'Ingeniero de sistemas con experiencia en desarrollo de aplicaciones windows, aplicaciones web con PHP, Angular, React. Manejo de bases de datos.'
    };
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <h5 className="card-header">Perfil del tutor</h5>
            <div className="row g-0">
                <div className="col-md-4 text-center">
                    <img src={tutor.imagen} className="img-fluid rounded-circle" alt={tutor.nombre} style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                    <h6 className="card-title">{tutor.nombre}</h6>
                    <p className="card-text"><small className="text-muted">Tutor desde {tutor.fechaInicio}</small></p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Sobre mi</h5>
                        <p className="card-text">{tutor.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}