import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutProject from './pages/AboutProject';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects/:id" element={<AboutProject />} />
      </Routes>
    </div>
  );
};

export default App;
