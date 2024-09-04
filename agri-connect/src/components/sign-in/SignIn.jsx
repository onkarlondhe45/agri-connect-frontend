import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './SignIn.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/footer';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/api/users/authenticate', formData);
      console.log('Token:', response.data);
      alert('Login successful!');
      // Save token or handle authentication as needed

      // Navigate to the home page after successful login
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.response || error.message);
      alert(`Login failed: ${error.response?.data || error.message}`);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
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

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>New here? Sign up!</p>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
