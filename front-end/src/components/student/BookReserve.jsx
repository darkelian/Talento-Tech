import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { bookTutoriiing } from "../schemas/bookTutoriiing";
import StatusEnum from "../models/status.model";

const BookReserve = () => {
  const user = useSelector((state) => state.user.user),
    id = user.id,
    status = StatusEnum.Accepted, //si se selecciona "Accepted"?
    date = new Date();
    //studentId?
    //reservationTypeId?

  const { bookTutoring } = useSelector((store) => store.infoStudentForm);

  const onSubmit = (values) => {
    const { reserveName, tutorId, email, date_start, date_end } = values;
    const data = {
      id,
      date,
      date_start,
      date_end,
      status,
      tutorId,
      reserveName,
      email,
    };
    console.log(data);
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
                name="tutorId"
                id="tutorId"
                as="select"
                className={`form-control ${
                  touched.tutorId && errors.tutorId ? "is-invalid" : ""
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
                name="tutorId"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_start" className="form-label">
                Fecha de inicio
              </label>
              <Field
                name="date_start"
                id="date_start"
                type="date"
                className={`form-control ${
                  touched.date_start && errors.date_start ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="date_start"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_end" className="form-label">
                Fecha de finalización
              </label>
              <Field
                name="date_end"
                id="date_end"
                type="date"
                className={`form-control ${
                  touched.date_end && errors.date_end ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="date_end"
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
