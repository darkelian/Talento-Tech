import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./components/shared/home";
import { Tutor } from "./components/tutor/tutor";
import { Student } from "./components/student/Student";
import { Navbar } from "./components/shared/navbar";
/* import { useEffect } from "react";
import { useSelector } from "react-redux"; */

function App() {

/*   const { notificationForm } = useSelector((store) => store.infoStudentForm);
  const selector = useSelector((store) => store.infoStudentForm);
  
  useEffect(()=>{
  const { dataForm } = selector;
console.log(dataForm);
},[notificationForm]); */

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor/*" element={<Tutor />} />
        <Route path="/student/*" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
