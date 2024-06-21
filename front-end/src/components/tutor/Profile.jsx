export function Profile() {
    const tutor = {
        name: 'Edgar Díaz Murillo',
        image: '/images/photoSmall.png',
        startDate: 'enero de 2024',
        description: 'Ingeniero de sistemas con experiencia en desarrollo de aplicaciones windows, aplicaciones web con PHP, Angular, React. Manejo de bases de datos.'
    };
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <h5 className="card-header">Perfil del tutor</h5>
            <div className="row g-0">
                <div className="col-md-4 text-center">
                    <img src={tutor.image} className="img-fluid rounded-circle" alt={tutor.name} style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                    <h6 className="card-title">{tutor.name}</h6>
                    <p className="card-text"><small className="text-muted">Tutor desde {tutor.startDate}</small></p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Sobre mi</h5>
                        <p className="card-text">{tutor.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}