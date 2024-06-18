import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/shared/home';
import { Tutor } from './components/tutor/tutor';
import { Navbar } from './components/shared/navbar';
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
