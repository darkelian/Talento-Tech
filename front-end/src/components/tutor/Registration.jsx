import React, { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import TutorContext from "./TutorRegistrationProvider";

export function Registration() {
    const props = useContext(TutorContext);

    return (
        <Formik
            initialValues={{
                names: '',
                lastNames: '',
                typeDocument: '',
                numberDocument: '',
                phone: '',
                department: '',
                city: '',
                email: '',
                password: '',
                passwordConfirm: ''
            }}
            validate={props.validate}
            onSubmit={props.handleSubmit}
        >
            {({ errors, touched, setFieldValue }) => (
                < div className="container">
                    <h1 className="text-center"><p>Regístrate como profesor</p></h1>
                    <h6 className="text-center">
                        <p>Completa el formulario para unirte como tutor a nuestra plataforma educativa</p>
                    </h6>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="names" className="form-label">Nombres</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.names && errors.names ? 'is-invalid' : ''}`}
                                id="names"
                                name="names"
                                autoFocus
                            />
                            <ErrorMessage name="names" component={() => (<div className='invalid-feedback'>{errors.names}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastNames" className="form-label">Apellidos</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.lastNames && errors.lastNames ? 'is-invalid' : ''}`}
                                id="lastNames"
                                name="lastNames"
                            />
                            <ErrorMessage name="lastNames" component={() => (<div className='invalid-feedback'>{errors.lastNames}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="documentType" className="form-label">Tipo de documento</label>
                            <Field
                                name="documentType"
                                id="documentType"
                                as="select"
                                className={`form-control ${touched.typeDocument && errors.typeDocument ? "is-invalid" : ""}`}
                            >
                                <option value=''> Selecciona una opción</option>
                                <option value='1'> Cédula de ciudadanía</option>
                                <option value='2'> Tarjeta de identidad</option>
                                <option value='3'> Número de pasaporte</option>
                                <option value='4'> Cédula de extranjería</option>
                            </Field>
                            <ErrorMessage name="typeDocument" component={() => (<div className='invalid-feedback'>{errors.typeDocument}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numberDocument" className="form-label">No. de documento</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.numberDocument && errors.numberDocument ? 'is-invalid' : ''}`}
                                id="numberDocument"
                                name="numberDocument"
                                aria-describedby="numberDocumentHelp"
                                autoComplete="numberDocument"
                            />
                            <ErrorMessage name="numberDocument" component={() => (<div className='invalid-feedback'>{errors.numberDocument}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Departamento</label>
                            <Field
                                name="department"
                                id="department"
                                as="select"
                                className={`form-control ${touched.department && errors.department ? "is-invalid" : ""}`}
                                onChange={(e) => {
                                    props.handleDepartmentChange(e);
                                    // Actualizar el valor del campo 'department' en Formik
                                    setFieldValue('department', e.target.value);
                                }}
                            >
                                <option value="">Selecciona un departamento</option>
                                {props.departments.map(dept => (
                                    <option
                                        key={dept.id}
                                        value={dept.id}
                                    >{dept.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage id="departmentHelp" component={() => (<div className='invalid-feedback'>{errors.department}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Ciudad</label>
                            <Field
                                name="city"
                                id="city"
                                as="select"
                                className={`form-control ${touched.city && errors.city ? "is-invalid" : ""}`}
                                disabled={!props.selectedDepartment}
                            >
                                <option value="">Selecciona una ciudad</option>
                                {props.cities.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage id="cityHelp" component={() => (<div className='invalid-feedback'>{errors.city}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">No. de celular</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                name="phone"
                                aria-describedby="phoneHelp"
                                autoComplete="phone"
                            />
                            <ErrorMessage name="phone" component={() => (<div className='invalid-feedback'>{errors.phone}</div>)} />
                        </div>
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
                            <label htmlFor="profession" className="form-label">Profesión</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.profession && errors.profession ? 'is-invalid' : ''}`}
                                id="profession"
                                name="profession"
                                aria-describedby="professionHelp"
                                autoComplete="profession"
                            />
                            <ErrorMessage name="profession" component={() => (<div className='invalid-feedback'>{errors.profession}</div>)} />
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
                        <div className="mb-3">
                            <label htmlFor="passwordConfirm" className="form-label">Confirmar contraseña</label>
                            <Field
                                type="password"
                                className={`form-control ${touched.passwordConfirm && errors.passwordConfirm ? 'is-invalid' : ''}`}
                                id="passwordConfirm"
                                name="passwordConfirm"
                                autoComplete="current-password"
                            />
                            <ErrorMessage name="passwordConfirm" component={() => (<div className='invalid-feedback'>{errors.passwordConfirm}</div>)} />
                        </div>
                        <button type="submit" className="btn btn-dark">Enviar</button>
                        {props.formSended && <div className="alert alert-success" role="alert">Información enviada satisfactoriamente</div>}
                    </Form>
                </div>
            )
            }
        </Formik >
    );
}
