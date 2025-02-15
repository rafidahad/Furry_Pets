// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import './LoginSignUp.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import furryLogo from '../assets/furryFriends_header_logo.png';
import LoadingScreen from './LoadingScreen';

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
      e.preventDefault();
      if (formData.name && formData.email && formData.password) {
          setLoading(true);
          setTimeout(() => navigate('/'), 2000);
      }
  };

  if (loading) return <LoadingScreen />;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <div className="login-wrapper">
        <div className="header text-center">
          <img 
            src={furryLogo} 
            alt="Website Logo" 
            className="img-fluid mb-3" 
            style={{ maxHeight: '80px' }} 
          />
          <Typography variant="h3" className="header-title">
            Sign Up
          </Typography>
          <div className="underline mb-4"></div>
        </div>
        <form onSubmit={handleSignup} className="inputs">
          <div className="input mb-3 d-flex align-items-center">
            <img src={user_icon} alt="User Icon" style={{ width: '24px', marginRight: '8px' }} />
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
          <div className="input mb-3 d-flex align-items-center">
            <img src={email_icon} alt="Email Icon" style={{ width: '24px', marginRight: '8px' }} />
            <input 
              type="email" 
              name="email" 
              placeholder="Enter E-mail" 
              value={formData.email} 
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
          <div className="input mb-3 d-flex align-items-center">
            <img src={password_icon} alt="Password Icon" style={{ width: '24px', marginRight: '8px' }} />
            <input 
              type="password" 
              name="password" 
              placeholder="Enter Password" 
              value={formData.password} 
              onChange={handleChange} 
              className="form-control" 
            />
          </div>
          <div className="submit-container d-flex justify-content-between">
            <Link
              to="/"
              className="btn"
              style={{
                background: 'linear-gradient(45deg, #4a90e2 30%, #50b3ff 90%)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
            <Button
              type="submit"
              className="btn-custom btn-login"
              sx={{
                background: 'linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                },
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
}

export default Signup;
