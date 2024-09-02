import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
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
    </>
  );
}

export default Home;
