
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/Home/About/About';
import Home from './Page/Home/Home/Home';
import Footer from './Page/Shared/Footer';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
