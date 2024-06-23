import React, { useContext } from "react";
import { Form, Formik, Field, ErrorMessage, useFormikContext } from "formik";
import TutorContext from "./TutorRegistrationProvider";

export function Registration() {
    const props = useContext(TutorContext);

    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                documentType: '',
                documentNumber: '',
                telephoneNumber: '',
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
                            <label htmlFor="name" className="form-label">Nombres</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                autoFocus
                            />
                            <ErrorMessage name="name" component={() => (<div className='invalid-feedback'>{errors.name}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Apellidos</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                                id="lastName"
                                name="lastName"
                            />
                            <ErrorMessage name="lastName" component={() => (<div className='invalid-feedback'>{errors.lastName}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="documentType" className="form-label">Tipo de documento</label>
                            <Field
                                name="documentType"
                                id="documentType"
                                as="select"
                                className={`form-control ${touched.documentType && errors.documentType ? "is-invalid" : ""}`}
                            >
                                <option value=''> Selecciona una opción</option>
                                <option value='1'> Cédula de ciudadanía</option>
                                <option value='2'> Tarjeta de identidad</option>
                                <option value='3'> Número de pasaporte</option>
                                <option value='4'> Cédula de extranjería</option>
                            </Field>
                            <ErrorMessage name="documentType" component={() => (<div className='invalid-feedback'>{errors.documentType}</div>)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="documentNumber" className="form-label">No. de documento</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.documentNumber && errors.documentNumber ? 'is-invalid' : ''}`}
                                id="documentNumber"
                                name="documentNumber"
                                aria-describedby="documentNumberHelp"
                                autoComplete="documentNumber"
                            />
                            <ErrorMessage name="documentNumber" component={() => (<div className='invalid-feedback'>{errors.documentNumber}</div>)} />
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
                            <label htmlFor="telephoneNumber" className="form-label">No. de celular</label>
                            <Field
                                type="text"
                                className={`form-control ${touched.telephoneNumber && errors.telephoneNumber ? 'is-invalid' : ''}`}
                                id="telephoneNumber"
                                name="telephoneNumber"
                                aria-describedby="telephoneNumberHelp"
                                autoComplete="telephoneNumber"
                            />
                            <ErrorMessage name="telephoneNumber" component={() => (<div className='invalid-feedback'>{errors.telephoneNumber}</div>)} />
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
