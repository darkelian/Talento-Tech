import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { contactFormStudent } from "../schemas/contactFormStudent";

const ContactStudent = () => {
  const { contactForm } = useSelector((store) => store.infoStudentForm);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center">Contáctanos</h3>
      <Formik
        initialValues={contactForm}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        validationSchema={contactFormStudent}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form
            className="card shadow my-5 needs-validation  container text-start py-4 px-md-5"
            noValidate
            style={{ maxWidth: "696px" }}
          >
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">
                Nombre
              </label>
              <Field
                name="contactName"
                id="contactName"
                type="text"
                className={`form-control ${
                  touched.contactName && errors.contactName ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="contactName"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">
                Correo electrónico
              </label>
              <Field
                name="contactEmail"
                id="contactEmail"
                type="email"
                className={`form-control ${
                  touched.contactEmail && errors.contactEmail
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="contactEmail"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactMessage" className="form-label">
                Mensaje
              </label>
              <Field
                name="contactMessage"
                id="contactMessage"
                as="textarea"
                rows="4"
                className={`form-control ${
                  touched.contactMessage && errors.contactMessage
                    ? "is-invalid"
                    : ""
                }`}
              />
              <ErrorMessage
                name="contactEmail"
                component="p"
                className="invalid-feedback"
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactStudent;