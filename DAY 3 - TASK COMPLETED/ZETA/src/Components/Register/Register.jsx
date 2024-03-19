import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';
import Logo from '../Login/Logo.svg';
import './Register.css';
import { useNavigate } from 'react-router-dom';
/*temp*/
export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        type: '',
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        dispatch(addUser(userData));
        navigate('/');
    };

    return (
        <div className='Register'>
            <div className='Register-inner'>
                <div className='Register-zeta'>
                    <div className='Register-zeta-contentbox'>
                        <h3>Sign Up and Simplify Your Mobile Recharges</h3>
                        <h1>Zephyr <br></br>E-Recharge<br></br> Tool & <br></br>Application </h1>
                    </div>
                </div>
                <div className='Register-Container'>
                    <div className='Register-Container-box'>
                        <div className='Register-Container-inner'>
                            <div className='Register-form'>
                                <div className='Register-form-inner'>
                                    <div className="Register-Signin-title">
                                        <h1>Sign Up</h1>
                                    </div>
                                    <div className='Register-login-box'>
                                        <div className='Register-register-divide'>
                                            <div className='Register-register-email-box Register-register-input-box'>
                                                <select className="Register-opt" name="type" value={userData.type} onChange={handleChange}>
                                                    <option value="">Admin/User</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="User">User</option>
                                                </select>
                                            </div>
                                            <div className='Register-register-email-box Register-register-input-box'>
                                                <input type='text' name="email" value={userData.email} onChange={handleChange} required></input>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className='Register-register-divide'>
                                            <div className='Register-register-Name-box Register-register-input-box'>
                                                <input type='text' name="username" value={userData.username} onChange={handleChange} required></input>
                                                <label>Username</label>
                                            </div>
                                            <div className='Register-register-Username-box Register-register-input-box'>
                                                <input type='text' name="mobileNumber" value={userData.mobileNumber} onChange={handleChange} required></input>
                                                <label>Mobile Number</label>
                                            </div>
                                        </div>
                                        <div className='Register-register-divide'>
                                            <div className='Register-register-Password-box Register-register-input-box'>
                                                <input type='password' name="password" value={userData.password} onChange={handleChange} required></input>
                                                <label>Password</label>
                                            </div>
                                            <div className='Register-register-Password-box Register-register-input-box'>
                                                <input type='password' name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required></input>
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                        <div className='Register-register-policy-box'>
                                            <p>By signing up, you agree to our <span>Terms</span>, <span>Privacy Policy</span>, and <span>Cookies Policy</span>.</p>
                                        </div>
                                    </div>
                                    <div className='Register-register-button-box'>
                                        <input type='button' onClick={handleSubmit} value="Sign up"></input>
                                    </div>
                                    <div className='Register-register-link-box'>
                                        <p className='Register-register-p'>Have an account? <span onClick={() => { navigate('/') }}>Log in</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Register-LogoBar'>
                    <div className='Register-Logo'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className='Register-Pages'>
                        <div className='Register-Page'>
                            <p>CONTACT US</p>
                        </div>
                        <div className='Register-Page'>
                            <p>ABOUT US</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
