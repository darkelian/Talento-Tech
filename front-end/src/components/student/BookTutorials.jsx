import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchRequestTutorialsByStudentId } from "../services/api";

const BookTutorials = () => {
  const user = useSelector((state) => state.user.user);
  const [requests, setRequests] = useState([]);
  //const [idTutor, setIdTutor] = useState();

  const loadRequests = async () => {
    try {
      const data = await fetchRequestTutorialsByStudentId(user.id);
      setRequests(data);
      //setIsLoad(false);
      console.log(user.id);
      console.log(requests);
    } catch (error) {
      console.log(error);
    }
  };

  /*   const getTutorName = async () => {
    try {
      const infoName = await fetchTutorInfo(idTutor);
      console.log(infoName);
      return infoName;
      //setNameLoad(infoName);
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div className="grid back-color py-5 align-item-center">
      <div className="">
        <h2 className="text-center">Tus tutorias</h2>
        <div
          className="container card shadow py-2"
          style={{ maxWidth: "696px" }}
        >
          <p className="back-color p-2 text-center">
            En este momento no tienes ninguna tutoria pendiente
          </p>
          {requests.map((request, index) => (
            <div key={index}>
              {console.log(request)}
              {/*               {setIdTutor(request.tutorId)}
              {getTutorName()} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookTutorials;
