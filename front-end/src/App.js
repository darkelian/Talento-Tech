import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/shared/Home.jsx';
import { Tutor } from './components/tutor/Tutor.jsx';
import { Navbar } from './components/shared/Navbar.jsx';
import Registrations from './components/student/Registrations';
import Registrations2 from './components/student/Registrations2';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor/*" element={<Tutor />} />
        <Route path='/student/registration1' element={<Registrations />} />
        <Route path='/student/registration2' element={<Registrations2 />} />
      </Routes>
    </div>
  );
}

export default App;
