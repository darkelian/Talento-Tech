import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { firstForm } from "../schemas/studentFirstForm";
import { useNavigate } from "react-router-dom";
import { addInfo } from "../features/studentFormSlice";

const Registrations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataStudentForm1 } = useSelector((store) => store.infoStudentForm);

  const onSubmit = (values) => {
    dispatch(addInfo(values));
    navigate("/student/registration2");
  };

  return (
    <>
      <div className="container height-container">
        <h1 className="text-center">
          <p>Regístrate como estudiante</p>
        </h1>
        <h6 className="text-center">
          <p>
            Completa el formulario para unirte como estudiante a nuestra
            plataforma educativa
          </p>
        </h6>
        <Formik
          initialValues={dataStudentForm1}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
          }}
          validationSchema={firstForm}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className=" needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="studentName" className="form-label">
                  Nombres
                </label>
                <Field
                  name="studentName"
                  id="studentName"
                  type="text"
                  className={`form-control ${
                    touched.studentName && errors.studentName
                      ? "is-invalid"
                      : ""
                  }`}
                  autoFocus
                />
                <ErrorMessage name="studentName" component="p" />
              </div>
              <div className="mb-3">
                <label htmlFor="surnameStudent" className="form-label">
                  Apellidos
                </label>
                <Field
                  name="surnameStudent"
                  id="surnameStudent"
                  type="text"
                  className={`form-control ${
                    touched.surnameStudent && errors.surnameStudent
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage name="surnameStudent" component="p" />
              </div>
              <div className="mb-3">
                <label htmlFor="documentType">Tipo de documento</label>
                <Field
                  name="documentType"
                  id="documentType"
                  as="select"
                  className={`form-control ${
                    touched.documentType && errors.documentType
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option> Selecciona una opción</option>
                  <option> Cédula de ciudadanía</option>
                  <option> Tarjeta de identidad</option>
                  <option> Número de pasaporte</option>
                  <option> Cédula de extranjería</option>
                </Field>
                <ErrorMessage name="documentType" component="p" />
              </div>
              <div className="mb-3">
                <label htmlFor="documentNumber"> Número de documento</label>
                <Field
                  name="documentNumber"
                  id="documentNumber"
                  type="text"
                  className={`form-control ${
                    touched.documentNumber && errors.documentNumber
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage name="documentNumber" component="p" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailStudent" className="form-label">
                  Correo electrónico
                </label>
                <Field
                  name="emailStudent"
                  id="emailStudent"
                  type="email"
                  className={`form-control ${
                    touched.emailStudent && errors.emailStudent
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage name="emailStudent" component="p" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Género
                </label>
                <Field
                  name="gender"
                  id="gender"
                  as="select"
                  className={`form-control ${
                    touched.gender && errors.gender ? "is-invalid" : ""
                  }`}
                >
                  <option> Select an option</option>
                  <option> Masculino</option>
                  <option> Femenino</option>
                  <option> Otro</option>
                  <option> Prefiero no responder</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="container__message-error"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Siguiente
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Registrations;
