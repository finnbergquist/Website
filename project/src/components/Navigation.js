import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/Progress-Feed'>Progress Feed</Link>
            </div>
            <div>
                <Link to='/Project-History'>History</Link>
            </div>
            <div>
                <Link to='/About'>About</Link>
            </div>
        </div>
    );
}

export default Navigation;