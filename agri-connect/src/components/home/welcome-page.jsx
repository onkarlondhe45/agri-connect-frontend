import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './welcome-page.css';
import Footer from './footer';

function WelcomePage() {
  return (
    <div className="home-wrapper">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faLeaf} className="icon-green" />
            AgriConnect
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Link to="/">
              <Button variant="outline-light" className="me-2">Log Out</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Content Section */}
      <div className="content-section">
        <h1>Welcome to AgriConnect</h1>
        <p>Your one-stop platform for agricultural connections and technology.</p>
      </div>

      <Footer />
    </div>
  );
}

export default WelcomePage;
