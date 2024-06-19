import { Form, Formik } from "formik";

export function Registration() {

    return (
        <>
            <Formik

                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }}

                validate={(values) => {
                    let errors = {}
                    if (!values.name) {
                        errors.name = 'Ingresa el nombre'
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Ingresa el apellido'
                    }
                    if (!values.email) {
                        errors.email = 'Ingresa el correo electrónico'
                    }
                    if (!values.password) {
                        errors.password = 'Ingresa la contraseña'
                    }
                    if (!values.passwordConfirm) {
                        errors.passwordConfirm = 'Ingresa la confirmación de la contraseña'
                    }
                    if (values.password && values.passwordConfirm && values.password !== values.passwordConfirm) {
                        errors.passwordConfirm = 'La confirmación de contraseña no coincide con la contraseña'
                    }

                    return errors;
                }}

                onSubmit={(values) => {

                }}

            >
                {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                    <div className="container">
                        <h1 className="text-center"><p>Regístrate como profesor</p></h1>
                        <h6 className="text-center">
                            <p>Completa el formulario para unirte como tutor a nuestra plataforma educativa</p>
                        </h6>
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombres</label>
                                <input type="text"
                                    className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.name && errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName"
                                    className="form-label">Apellidos</label>
                                <input type="text"
                                    className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                                    id="lastName"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.lastName && errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input type="email"
                                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-describedby="emailHelp"
                                    autoComplete="email" />
                                {touched.email && errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                <div id="emailHelp" className="form-text">Nosotros no compartimos su información con nadie</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password"
                                    className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="current-password" />
                                {touched.password && errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirm" className="form-label">Confirmar contraseña</label>
                                <input type="password"
                                    className={`form-control ${touched.passwordConfirm && errors.passwordConfirm ? 'is-invalid' : ''}`}
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="current-password" />
                                {touched.passwordConfirm && errors.passwordConfirm && <div className='invalid-feedback'>{errors.passwordConfirm}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </Form>
                    </div>
                )}
            </Formik >
        </>
    )
}