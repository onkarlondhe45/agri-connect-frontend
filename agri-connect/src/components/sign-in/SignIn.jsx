import { useState } from 'react';
import axios from 'axios';
import './SignIn.css'; 
import { useNavigate } from 'react-router-dom';

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
    } catch (error) {
      console.error('Error logging in:', error.response || error.message);
      alert(`Login failed: ${error.response?.data || error.message}`);
    }
  };
  

  return (
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
  );
};

export default SignIn;
