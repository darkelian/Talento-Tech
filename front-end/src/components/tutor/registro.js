export function Registro() {
    return (
        <>
            <div className="container">
                <h1 className="text-center"><p>Regístrate como profesor</p></h1>
                <h6 className="text-center">
                    <p>Completa el formulario para unirte como tutor a nuestra plataforma educativa</p>
                </h6>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombres" className="form-label">Nombres</label>
                        <input type="text" className="form-control" id="nombres" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="apellidos" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete="email" />
                        <div id="emailHelp" className="form-text">Nosotros no compartimos su información con nadie</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasena" className="form-label">Password</label>
                        <input type="password" className="form-control" id="contrasena" autoComplete="current-password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}