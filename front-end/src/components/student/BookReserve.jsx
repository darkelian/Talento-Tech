import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { bookTutoriiing } from "../schemas/bookTutoriiing";

const BookReserve = () => {

 //const user = useSelector((state) => state.user.user);


  const { bookTutoring } = useSelector((store) => store.infoStudentForm);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="p-5 mt-5">
      <h2
        className="px-md-5 mx-auto font-size-md-up"
        style={{ maxWidth: "696px" }}
        id="bookReserve"
      >
        Reserva tu tutoría
      </h2>
      <Formik
        initialValues={bookTutoring}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        validationSchema={bookTutoriiing}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form
            className="card shadow my-5 needs-validation  container text-start py-4 px-md-5"
            noValidate
            style={{ maxWidth: "696px" }}
          >
            <div className="mb-3">
              {/* da igual el nombre */}
              <label htmlFor="reserveName" className="form-label">
                Materia
              </label>
              <Field
                name="reserveName"
                id="reserveName"
                type="text"
                className={`form-control ${
                  touched.reserveName && errors.reserveName ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="reserveName"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tutorId" className="form-label">
                Profesores de la materia
              </label>
              <Field
                name="reserveSubject"
                id="reserveSubject"
                as="select"
                className={`form-control ${
                  touched.reserveSubject && errors.reserveSubject
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option>Selecciona un tema</option>
                <option>Matemáticas</option>
                <option>Física</option>
                <option>Química</option>
                <option>Biología</option>
                <option>Inglés</option>
                <option>Historia</option>
              </Field>
              <ErrorMessage
                name="reserveSubject"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <Field
                name="reserveEmail"
                id="reserveEmail"
                type="email"
                className={`form-control ${
                  touched.reserveEmail && errors.reserveEmail
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="reserveEmail"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_start" className="form-label">
                Fecha de inicio
              </label>
              <Field
                name="reserveDate"
                id="reserveDate"
                type="date"
                className={`form-control ${
                  touched.reserveDate && errors.reserveDate ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="reserveDate"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_end" className="form-label">
                Fecha de finalización
              </label>
              <Field
                name="reserveHour"
                id="reserveHour"
                type="date"
                className={`form-control ${
                  touched.reserveHour && errors.reserveHour ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="reserveHour"
                component="p"
                className="invalid-feedback"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark"
              disabled={isSubmitting}
            >
              Reservar tutoría
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookReserve;
