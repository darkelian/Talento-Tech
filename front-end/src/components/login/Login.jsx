import { Form, Formik, Field, ErrorMessage } from "formik";

export function Login(props) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={props.validate}
            onSubmit={props.handleSubmit}
        >
            {({ errors, touched, setFieldValue }) => (
                < div className="container">
                    <h1 className="text-center"><p>Ingresa a nuestra plataforma</p></h1>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <Field
                                type="email"
                                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                autoComplete="email"
                            />
                            <ErrorMessage name="email" component={() => (<div className='invalid-feedback'>{errors.email}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <Field
                                type="password"
                                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                autoComplete="current-password"
                            />
                            <ErrorMessage name="password" component={() => (<div className='invalid-feedback'>{errors.password}</div>)} />
                        </div>
                        <button type="submit" className="btn btn-dark">Ingresar</button>
                        {props.formSended && <div className="alert alert-success" role="alert">Información enviada satisfactoriamente</div>}
                    </Form>
                </div>
            )
            }
        </Formik >
    );
}