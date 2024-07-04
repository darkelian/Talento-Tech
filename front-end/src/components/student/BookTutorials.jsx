import React from "react";

const BookTutorials = () => {
  return (
    <div className="grid back-color py-5 align-item-center">
      <div className="">
        <h2 className="text-center">Tus tutorias</h2>
        <div
          className="container card shadow py-2"
          style={{ maxWidth: "696px" }}
        >
          <p>En este momento no tienes ninguna tutoria pendiente</p>
        </div>
      </div>
    </div>
  );
};

export default BookTutorials;
