import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchRequestTutorialsByStudentId } from "../services/api";

const BookTutorials = () => {
  const user = useSelector((state) => state.user.user);
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const data = await fetchRequestTutorialsByStudentId(user.id);
      setRequests(data);
      console.log(requests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRequests();
  }, [user.id]);

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
