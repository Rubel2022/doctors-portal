
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DoctorsAppointment from './Page/DoctorsAppointment/DoctorsAppointment';
import About from './Page/Home/About/About';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import SignUp from './Page/Login/SignUp';

import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="appointment" element={<DoctorsAppointment />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
