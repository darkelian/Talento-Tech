import React from "react";
import ServicesStudent from "./ServicesStudent";
import SignaturesStudents from "./SignaturesStudents";
import ContactStudent from "./ContactStudent";

const HomeStudent = () => {
  return (
    <div className="container mt-4 pt-4 text-center">
      <div className="col">
        <h2 className="my-4">Bienvenido a Tutorshop</h2>
        <p className="fs-6 ">
          Ofrecemos servicios de tutoría en una amplia variedad de materias para
          ayudarte a alcanzar tus metas académicas. Reserva una cita con
          nuestros expertos profesores y mejora tus habilidades.
        </p>
        <button type="button" className="btn btn-dark my-4">
          Reservar cita
        </button>
      </div>
      <ServicesStudent />
      <SignaturesStudents />
      <ContactStudent />
    </div>
  );
};

export default HomeStudent;
