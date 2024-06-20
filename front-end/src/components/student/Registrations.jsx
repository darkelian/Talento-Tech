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
      <div className="container">
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
          onSubmit={onSubmit}
          validationSchema={firstForm}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">
                Nombres
              </label>
              <Field
                name="studentName"
                id="nombres"
                type="text"
                className="form-control"
                autoFocus
              />
              <ErrorMessage name="studentName" component="p" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">
                Apellidos
              </label>
              <Field
                name="surnameStudent"
                id="apellidos"
                type="text"
                className="form-control"
              />
              <ErrorMessage name="surnameStudent" component="p" />
            </div>
            <div className="mb-3">
              <label htmlFor="documentType">Tipo de documento</label>
              <Field
                name="documentType"
                id="documentType"
                as="select"
                className="form-control"
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
                className="form-control"
              />
              <ErrorMessage name="documentNumber" component="p" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <Field
                name="emailStudent"
                id="email"
                type="email"
                className="form-control"
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
                className="form-control"
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

            <button type="submit" className="btn btn-primary">
              Siguiente
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Registrations;
