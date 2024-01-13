import './App.css';
import BesantTechnologies from './BesantTechnologies';
import About from './about/About';
import Car from './car/Car';
import Contact from './contact/Contact';
import Home from './home/Home';
import Login from './login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsingEffect from './usingeffect/UsingEffect';
import DataFetch from './fetchdata/DataFetch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/car" element={<Car />} />
          <Route path="/besant" element={<BesantTechnologies/>} />
          <Route path="/effect" element={<UsingEffect/>} />
          <Route path="/datafetch" element={<DataFetch/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
