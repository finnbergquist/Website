import React from 'react';
import { Link } from 'react-router-dom'; 

// style 
import '../styles/Nav.css';

function Navigation() {
    return (
        <div id="nav-container">
            <h2>Project Name</h2>

            <div className="link-container">
                <div className="link-box">
                    <Link to='/' className="link">Home</Link>
                </div>
                <div className="link-box">
                    <Link to='/Progress-Feed' className="link">Progress Feed</Link>
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