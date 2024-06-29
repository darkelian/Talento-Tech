import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/shared/Home.jsx";
import { Tutor } from "./components/tutor/Tutor.jsx";
import { Navbar } from "./components/shared/Navbar.jsx";
import { Student } from "./components/student/Student.jsx";
import { Login } from "./components/login/Login.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor/*" element={<Tutor />} />
        <Route path="/student/*" element={<Student />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
