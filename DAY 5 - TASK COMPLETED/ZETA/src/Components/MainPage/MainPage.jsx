import React, { useState } from 'react';
import Logo from '../Login/Logo.svg';
import './MainPage.css';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('POPULAR PLANS'); // Default selected tab
    const userType = localStorage.getItem('userType');
    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
        switch(tabName) {
            case "POPULAR PLANS":
                if(userType == 'Admin'){
                    navigate("/main/admin/popularplans");
                }
                else{
                    navigate("/main/popular-plans");
                }
                break;
            case "ADD-ONS":
                if(userType == 'Admin'){
                    navigate("/main/admin/addons");
                }
                else{
                    navigate("/main/add-ons");
                }
                break;
            case "RECHARGE DETAILS":
                if(userType == 'Admin'){
                    navigate("/main/admin/rechargehistory");
                }
                else{
                    navigate("/main/recharge-details");
                }
                break;
            case "LOGOUT":
                localStorage.removeItem('userType');
                navigate("/"); 
                break;
            default:
                break;
        }
    };
    

    return (
        <div className='Main'> 
            <div className='Main-inner'>
                <div className='Main-zeta'>
                    <div className='Main-zeta-contentbox'>
                        <div className='Main-Navbar'>
                            <div className='Main-Navbar-inner'>
                                <div className='tabs' onClick={() => handleTabClick('POPULAR PLANS')}>
                                    <div className='tabs-inner'>
                                        <h2>POPULAR PLANS</h2>
                                        <p>Stream, Surf, and Share More with Our Popular Data Plans</p>
                                    </div>
                                </div>
                                <div className='tabs' onClick={() => handleTabClick('ADD-ONS')}>
                                    <div className='tabs-inner'>
                                        <h2>ADD-ONS</h2>
                                        <p>Enhance your package with these optional add-ons</p>
                                    </div>
                                </div>
                                <div className='tabs' onClick={() => handleTabClick('RECHARGE DETAILS')}>
                                    <div className='tabs-inner'>
                                        <h2>RECHARGE DETAILS</h2>
                                        <p>Top-Up Log</p>
                                    </div>
                                </div>
                                <div className='tabs' onClick={() => handleTabClick('LOGOUT')}>
                                    <div className='tabs-inner'>
                                        <h2>LOGOUT</h2>
                                        <p>Logging off with a smile!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Main-Container'>
                    <div className='Main-Container-box'>
                        <div className='title-outer'>
                            <div className='Title'>
                                <h1>{selectedTab}</h1>
                            </div>
                        </div>
                        <div className='Content'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
                <div className='Main-LogoBar'>
                    <div className='Main-Logo'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className='Main-Pages'>
                        <div className='Main-Page'>
                            <p>CONTACT US</p>
                        </div>
                        <div className='Main-Page'>
                            <p>ABOUT US</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
