import React from 'react';
import { Link } from 'react-router-dom'; 

// style 
import '../styles/Nav.css';

// image 
import Logo from '../images/bowdoin-logo.png'

function Navigation() {
    return (
        <div id="nav-container">
            <div id="title-container">
                <img src={Logo} alt="The word Bowdoin in white text on a black background"/>
                <h2>CSCI 2345 Project</h2>
            </div>

            <div id="link-container">
                <div className="link-box">
                    <Link to='/' className="link">Home</Link>
                </div>
                <div className="link-box">
                    <Link to='/Database' className="link">Database</Link>
                </div>
                <div className="link-box">
                    <Link to='/Project-History' className="link">History</Link>
                </div>
                <div className="link-box">
                    <Link to='/About' className="link">About</Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;