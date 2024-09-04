import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './welcome-page'; // Adjust the path as necessary
import './footer.css';
import Footer from './footer';

function Home({ isLoggedIn }) {
  return (
    <div className="home-wrapper">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon 
              icon={faLeaf} 
              className="icon-green" 
            />
            AgriConnect
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/sign-in">
              <Button variant="outline-light" className="me-2">Sign In</Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="outline-light">Sign Up</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="content-section">
        <h1>Access Your AgriConnect Account</h1>
        <p>Log in or register to start using AgriConnect.</p>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
