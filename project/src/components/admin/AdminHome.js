import React from 'react';
import AddArt from './AddArt';

function AdminHome(props) {
    return (
        <div>
            <h1>Welcome, Admin!</h1>
            <AddArt />
        </div>
    );
}

export default AdminHome;