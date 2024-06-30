import { Form, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../features/userSlice";

export function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSended, setFormSended] = useState(false);
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!values.email) {
            errors.email = 'Ingresa el correo electrónico';
        } else if (!emailPattern.test(values.email)) {
            errors.email = 'El correo electrónico ingresado es inválido';
        }

        if (!values.password) {
            errors.password = 'Ingresa la contraseña';
        }

        return errors;
    }

    const handleSubmit = (event) => {

        // Aquí deberías enviar las credenciales al backend y obtener los datos del usuario
        const userData = {
            id: '1',
            email: event.email,
            password: event.password,
            rol: 'tutor'
        };
        dispatch(login(userData));
        setFormSended(true);
        setTimeout(() => {

            setFormSended(false);
            if (userData.rol == 'tutor') {
                navigate('../tutor/Dashboard')
            }
            if (userData.rol == 'student') {
                navigate('../student/Dashboard')
            }
        }, 2000);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
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
                        {formSended && <div className="alert alert-success" role="alert">Ingreso satisfactorio</div>}
                    </Form>
                </div>
            )
            }
        </Formik >
    );
}