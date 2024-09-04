import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/sign-in');
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
      const response = await axios.post('http://localhost:9090/api/users/create', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('User registered:', response.data);
      alert('Registration successful!');

      navigate('/sign-in');

    } catch (error) {
      console.error('Error registering user:', error.response || error.message);
      alert(`Registration failed: ${error.response?.data || error.message}`);
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

      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
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
          <div>
            <label>Role:</label>
            <select 
              name="role" 
              value={formData.role} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select a role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FARMER">Farmer</option>
              <option value="EXPERT">Expert</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="signin-link">
          <p>Already have an account?</p>
          <button onClick={handleSignInClick}>Sign In</button>      
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
