import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { secondForm } from "../schemas/studentSecondForm";
import { useNavigate } from "react-router-dom";

const Registrations2 = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const sendInfo = () => {
    navigate("/");
  };

  return (
    <>
      {/* Modal starts*/}
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  ¡Registro exitoso!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                La información ha sido enviada de manera exitosa.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() => sendInfo()}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal ends */}

      <div className="container">
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
          initialValues={{
            age: "",
            residenceDepartment: "",
            documentType: "",
            emailStudent: "",
            documentNumber: "",
          }}
          onSubmit={onSubmit}
          validationSchema={secondForm}
        >
          <Form autoComplete="off">
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Edad
              </label>
              <Field
                name="age"
                id="age"
                type="text"
                className="form-control"
                autoFocus
              />
              <ErrorMessage name="age" component="p" />
            </div>
            <div className="mb-3">
              <label htmlFor="residenceDepartment" className="form-label">
                Departamento de residencia
              </label>
              <Field
                name="residenceDepartment"
                id="residenceDepartment"
                as="select"
                className="form-control"
              >
                <option> Selecciona una opción</option>
                <option> Bogotá D.C</option>
                <option> Cundinamarca</option>
                <option> Medellin</option>
                <option> Cali</option>
              </Field>
              <ErrorMessage name="residenceDepartment" component="p" />
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
                aria-describedby="emailHelp"
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
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I accept the data processing
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              Siguiente
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Registrations2;
