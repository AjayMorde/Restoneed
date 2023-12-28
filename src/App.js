import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbars/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;