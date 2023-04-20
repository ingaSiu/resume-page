import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutProject from './pages/AboutProject';
import './App.css';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects/:id" element={<AboutProject />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default App;
