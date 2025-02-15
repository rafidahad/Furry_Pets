import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import LoadingScreen from './LoadingScreen';


function Login () {
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
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleLogin} className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="email" placeholder="Enter E-mail" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <Link to="/signup" className="submit">Sign Up</Link>
                    <button type="submit" className={`submit ${formData.email && formData.password ? "active" : "gray"}`}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;