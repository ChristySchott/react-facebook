import React from 'react';

const Room = props => (
    <div className="room">
        <img src={props.img} alt="Room"/>
        <div className="room__online"></div>
    </div>
)

export default Room;