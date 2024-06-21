import { Form, Formik, Field, ErrorMessage } from "formik";
import { useState, useCallback } from "react";

const validate = (values) => {
    const errors = {};
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!values.name) {
        errors.name = 'Ingresa el nombre';
    } else if (!namePattern.test(values.name)) {
        errors.name = 'El nombre ingresado es inválido';
    }

    if (!values.lastName) {
        errors.lastName = 'Ingresa el apellido';
    } else if (!namePattern.test(values.lastName)) {
        errors.lastName = 'El apellido ingresado es inválido';
    }

    if (!values.email) {
        errors.email = 'Ingresa el correo electrónico';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'El correo electrónico ingresado es inválido';
    }

    if (!values.password) {
        errors.password = 'Ingresa la contraseña';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Ingresa la confirmación de la contraseña';
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'La confirmación de contraseña no coincide con la contraseña';
    }

    return errors;
};

export function Registration() {
    const [formSended, setFormSended] = useState(false);

    const handleSubmit = useCallback((values, { resetForm }) => {
        resetForm();
        setFormSended(true);
        setTimeout(() => {
            setFormSended(false);
        }, 5000);
    }, []);

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

                validate={validate}
                onSubmit={handleSubmit}

            >
                {({ errors, touched }) => (
                    <div className="container">
                        <h1 className="text-center"><p>Regístrate como profesor</p></h1>
                        <h6 className="text-center">
                            <p>Completa el formulario para unirte como tutor a nuestra plataforma educativa</p>
                        </h6>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombres</label>
                                <Field type="text"
                                    className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    autoFocus />
                                <ErrorMessage name="name" component={() => (<div className='invalid-feedback'>{errors.name}</div>)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName"
                                    className="form-label">Apellidos</label>
                                <Field type="text"
                                    className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                                    id="lastName"
                                    name="lastName" />
                                <ErrorMessage name="lastName" component={() => (<div className='invalid-feedback'>{errors.lastName}</div>)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <Field type="email"
                                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    autoComplete="email" />
                                <ErrorMessage name="email" component={() => (<div className='invalid-feedback'>{errors.email}</div>)} />
                                <div id="emailHelp" className="form-text">Nosotros no compartimos su información con nadie</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <Field type="password"
                                    className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    autoComplete="current-password" />
                                <ErrorMessage name="password" component={() => (<div className='invalid-feedback'>{errors.password}</div>)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirm" className="form-label">Confirmar contraseña</label>
                                <Field type="password"
                                    className={`form-control ${touched.passwordConfirm && errors.passwordConfirm ? 'is-invalid' : ''}`}
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    autoComplete="current-password" />
                                <ErrorMessage name="passwordConfirm" component={() => (<div className='invalid-feedback'>{errors.passwordConfirm}</div>)} />
                            </div>
                            <button type="submit" className="btn btn-dark">Enviar</button>
                            {formSended && <div className="alert alert-success" role="alert">Información enviada satisfactoriamente</div>}
                        </Form>
                    </div>
                )}
            </Formik >
        </>
    )
}