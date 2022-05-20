
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DoctorsAppointment from './Page/DoctorsAppointment/DoctorsAppointment';
import About from './Page/Home/About/About';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SignUp from './Page/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Page/Shared/Navbar';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointment from './Page/Dashboard/MyAppointment';
import MyReview from './Page/Dashboard/MyReview';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="appointment" element={
          <RequireAuth>
            <DoctorsAppointment />
          </RequireAuth>}></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
