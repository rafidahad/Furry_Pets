// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginSignUp.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import LoadingScreen from './LoadingScreen';
import furryLogo from '../assets/furryFriends_header_logo.png';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setLoading(true);
      setTimeout(() => navigate('/home'), 2000);
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
      <div className="login-wrapper" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="header text-center">
          <img
            src={furryLogo}
            alt="Website Logo"
            className="img-fluid mb-3"
            style={{ maxHeight: '80px' }}
          />
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#4a90e2' }}>
            Login
          </Typography>
          <div
            className="underline mb-4"
            style={{
              height: '4px',
              backgroundColor: '#4a90e2',
              width: '50px',
              margin: '0 auto',
            }}
          ></div>
        </div>
        <form onSubmit={handleLogin} className="inputs">
          <div className="input mb-3 d-flex align-items-center">
            <img
              src={email_icon}
              alt="Email Icon"
              style={{ width: '24px', marginRight: '8px' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: '4px' }}
            />
          </div>
          <div className="input mb-3 d-flex align-items-center">
            <img
              src={password_icon}
              alt="Password Icon"
              style={{ width: '24px', marginRight: '8px' }}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: '4px' }}
            />
          </div>
          <div className="forgot-password mb-3">
            <Typography variant="body2">
              Lost Password?{" "}
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: '#4a90e2',
                }}
              >
                Click Here!
              </span>
            </Typography>
          </div>
          <div className="submit-container d-flex justify-content-between">
            <Link
              to="/signup"
              className="btn"
              style={{
                background: 'linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
              }}
            >
              Sign Up
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #4a90e2 30%, #50b3ff 90%)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #50b3ff 30%, #4a90e2 90%)',
                },
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
}

export default Login;
