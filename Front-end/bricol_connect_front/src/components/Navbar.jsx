import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div className="container d-flex align-items-center">
        
        <div className='d-flex justify-content-start'>
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                <img src="/Images/bricol'connect1.png" alt="Logo" style={{ height: '40px', width: 'auto' }} className="me-2"/>
                <span className='brand'>Bricol'Connect</span>
            </Link>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              Acceuil
            </li>
            <li className="nav-item">
              Contact
            </li>
            <li className='nav-item'>
              Collections
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;