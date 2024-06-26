import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">TutorShop</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tutores
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/tutor/registro">Registro</Link></li>
                                <li><Link className="dropdown-item" to="/tutor/dashboard">Dashboard</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/estudiante">Estudiante</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}