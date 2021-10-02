import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{ name, phone, website, address, id } = props.friend;
    const history = useHistory();

    const friendStyle ={
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: "10px"
    }
    const url = `/friend/${id}`;

    const handleFriendClick =() => {
        history.push(`/friend/${id}`)
    }

    return (
        <div style={friendStyle}>
            <h2>I am: {name} {id}</h2>
            <h5>call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p>Address: {address.city}</p>
            <Link to={url}> Visit Me</Link>
            <br/>
            <Link to={url}>
            <button>Visit ME</button>
            </Link>
            <br/>
            <button onClick={handleFriendClick}>Visite Me 2</button>
        </div>
    );
};

export default Friend;