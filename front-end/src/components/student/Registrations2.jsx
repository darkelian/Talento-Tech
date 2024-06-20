import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { secondForm } from "../schemas/studentSecondForm";
import { useNavigate } from "react-router-dom";

const Registrations2 = () => {
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
  };

  const sendInfo = () => {
    navigate("/");
  };

  useEffect(() => {
    (() => {

      const forms = document.querySelectorAll(".needs-validation");


      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
    
  }, []);

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
          initialValues={dataStudentForm2}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                    touched.name && errors.name ? "is-invalid" : ""
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
                /*                 data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal" */
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

export default Registrations2;
