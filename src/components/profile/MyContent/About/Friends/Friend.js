import React from 'react';

const Friend = (props) => (
    <div className="gallery__box">
        <img src={props.photo} alt="User photo"/>
        <p>{props.name}</p>
    </div>
)

export default Friend;