import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <p>Id: <Link to={`/friend/${id}`}>Show details of {id}</Link></p>
        </div>
    );
};

export default Friend;