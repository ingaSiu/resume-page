import { useNavigate } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div onClick={() => navigate('/')}>Home</div>
        <div onClick={() => navigate('/contacts')}>Contacts</div>
        <div onClick={() => navigate('/about')}>About me</div>
      </nav>
    </div>
  );
};

export default Topbar;
