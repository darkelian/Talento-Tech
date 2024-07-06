import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/shared/Home.jsx";
import { Tutor } from "./components/tutor/Tutor.jsx";
import { Navbar } from "./components/shared/Navbar.jsx";
import { Student } from "./components/student/Student.jsx";

import Footer from "./components/shared/Footer.jsx";

import { Login } from "./components/login/Login.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./components/features/userSlice.js";
import ProtectedRoute from './components/shared/ProtectedRoute';
import Logout from "./components/logout/Logout.jsx";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/login/*" element={<Login />} />
        <Route path="/logout/*" element={<Logout />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/tutor/*"
          element={
            <ProtectedRoute>
              <Tutor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute>
              <Student />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
