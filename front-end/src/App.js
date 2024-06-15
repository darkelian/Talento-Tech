import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/shared/home';
import { Tutor } from './components/tutor/tutor';
import { Navbar } from './components/shared/navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor/*" element={<Tutor />} />
      </Routes>
    </div>
  );
}

export default App;
