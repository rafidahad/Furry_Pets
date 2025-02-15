import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import LoadingScreen from './LoadingScreen';

function Signup () {
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
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSignup} className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="email" placeholder="Enter E-mail" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="submit-container">
                <button type="submit" className={`submit ${formData.email && formData.password ? "active" : "gray"}`}>Sign Up</button>
                    <Link to="/" className="submit">Login</Link>
                </div>
            </form>
        </div>
    );
};


export default Signup;
