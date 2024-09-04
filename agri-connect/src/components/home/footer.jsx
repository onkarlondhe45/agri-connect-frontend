import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; 

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container>
        <Row className="text-center">
          <Col md={3}>
            <h6>About AgriConnect</h6>
            <p className="small">
              Connecting farmers with agricultural experts and the latest technologies.
            </p>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#pricing" className="text-light small">Pricing</Nav.Link>
              <Nav.Link href="#contact" className="text-light small">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h6>Contact</h6>
            <p className="small">support@agriconnect.com</p>
            <p className="small">+1 234 567 890</p>
          </Col>
          <Col md={3}>
            <h6>Follow Us</h6>
            <Nav className="justify-content-center">
              <Nav.Link href="https://www.facebook.com" target="_blank" className="text-light small">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="_blank" className="text-light small">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com" target="_blank" className="text-light small">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com" target="_blank" className="text-light small">
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <Navbar.Text className="text-light small">
              © {new Date().getFullYear()} AgriConnect. All Rights Reserved.
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
