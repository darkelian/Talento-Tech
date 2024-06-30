import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { secondForm } from "../schemas/studentSecondForm";
import { useNavigate } from "react-router-dom";

const Registrations2 = () => {
  const [formSended, setFormSended] = useState(false);

  const navigate = useNavigate();

  const { dataStudentForm2 } = useSelector((store) => store.infoStudentForm);
  const {
    dataForm: {
      studentName,
      surnameStudent,
      documentType,
      emailStudent,
      documentNumber,
      gender,
    },
  } = useSelector((store) => store.infoStudentForm);

  const onSubmit = (values) => {
    setFormSended(true);
    const {
      age,
      residenceDepartment,
      phoneNumber,
      password,
      passwordConfirmation,
      dataTreatment,
    } = values;
    const sendData = {
      studentName,
      surnameStudent,
      documentType,
      emailStudent,
      documentNumber,
      gender,
      age,
      residenceDepartment,
      phoneNumber,
      password,
      passwordConfirmation,
      dataTreatment,
    };
    console.log(sendData);

    setTimeout(()=>{
      navigate("/");
    },3000)
  };


  return (
    <>
      <div className="container height-container">
        <h1 className="text-center">
          <p>Continúa con el registro</p>
        </h1>
        <h6 className="text-center">
          <p>
            Completa el formulario para unirte como estudiante a nuestra
            plataforma educativa
          </p>
        </h6>
        <Formik
          initialValues={dataStudentForm2}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            onSubmit(values);
          }}
          validationSchema={secondForm}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className=" needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Edad
                </label>
                <Field
                  name="age"
                  id="age"
                  type="text"
                  className={`form-control ${
                    touched.age && errors.age ? "is-invalid" : ""
                  }`}
                  autoFocus
                />
                <ErrorMessage
                  name="age"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residenceDepartment" className="form-label">
                  Departamento de residencia
                </label>
                <Field
                  name="residenceDepartment"
                  id="residenceDepartment"
                  as="select"
                  className={`form-control ${
                    touched.residenceDepartment && errors.residenceDepartment
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option> Selecciona una opción</option>
                  <option> Bogotá D.C</option>
                  <option> Cundinamarca</option>
                  <option> Medellin</option>
                  <option> Cali</option>
                </Field>
                <ErrorMessage
                  name="residenceDepartment"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">Número de celular</label>
                <Field
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  className={`form-control ${
                    touched.phoneNumber && errors.phoneNumber
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password"> Contraseña</label>
                <Field
                  name="password"
                  id="password"
                  type="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfirmation" className="form-label">
                  Confirme la contraseña
                </label>
                <Field
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  type="password"
                  className={`form-control ${
                    touched.passwordConfirmation && errors.passwordConfirmation
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3 form-check">
                <Field
                  name="dataTreatment"
                  id="dataTreatment"
                  type="checkbox"
                  className={`form-check-input ${
                    touched.dataTreatment && errors.dataTreatment
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <label className="form-check-label" htmlFor="dataTreatment">
                  Acepta el tratamiento de datos
                </label>
                <ErrorMessage
                  name="dataTreatment"
                  component="p"
                  className="invalid-feedback"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Siguiente
              </button>
              {formSended && (
                <div className="alert alert-success" role="alert">
                  Información enviada satisfactoriamente
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Registrations2;
