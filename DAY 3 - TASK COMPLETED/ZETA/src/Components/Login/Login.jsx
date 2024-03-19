import React, { useState } from 'react';
import Logo from './Logo.svg';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector(state => state.user.users);
  console.log(users);
  const handleLogin = () => {
    dispatch(login({ username, password }));
    
    const userType = localStorage.getItem('userType');
    
    if (!userType) {
      handleAlert('User not found!');
    } else if (userType !== 'Admin' && userType !== 'User') {
      handleAlert('Invalid user type!');
    } else {
      if (userType === 'Admin') {
        navigate('/main/admin/popularplans');
      } else {
        navigate('/main/popular-plans');
      }
    }
  };

  const handleAlert = (message) => {
    alert(message);
  };

  return (
    <div className='Login'>
      <div className='Login-inner'>
        <div className='zeta'>
          <div className='zeta-contentbox'>
            <h3>Seamless Recharges, Effortless Logins</h3>
            <h1>Zephyr <br></br>E-Recharge<br></br> Tool & <br></br>Application </h1>
          </div>
        </div>
        <div className='Login-Container'>
          <div className='Login-Container-box'>
            <div className='Login-Container-inner'>
              <div className='Login-form'>
                <div className='Login-form-inner'>
                  <div className="Signin-title">
                    <h1>Sign in</h1>
                  </div>
                  <div className='login-box'>
                    <div className='username-box'>
                      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                      <label>Username</label>
                    </div>
                    <div className='password-box'>
                      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                      <label>Password</label>
                    </div>
                    <div className='forgot-pass-box'>
                      <div className='forgot-pass-link'>Forgot Password?</div>
                    </div>
                  </div>
                  <div className='button-box'>
                    <input type='button' onClick={handleLogin} value='Log in'></input>
                  </div>
                  <div className='register-link-box'>
                    <p className='login-register-p'>Don't have an account? </p>
                    <p className='Sign-up' onClick={() => {navigate('/register')}} >Sign up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='LogoBar'>
          <div className='Logo'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='Pages'>
            <div className='Page'>
              <p>CONTACT US</p>
            </div>
            <div className='Page'>
              <p>ABOUT US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
