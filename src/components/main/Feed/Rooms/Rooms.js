import React from 'react';

import person1 from '../../../../assets/post-person1.png';
import person2 from '../../../../assets/post-person2.png';
import person3 from '../../../../assets/post-person3.png';
import person4 from '../../../../assets/post-person4.png';
import room from '../../../../assets/room.png';
import Room from './Room'

const Rooms = () => (
    <div className="wrapper">
        <div className="rooms__header">
            <div className="rooms__header--title">
                <img src={room} alt="New Room"/>
                <p>Salas</p>
            </div>
            <div className="rooms__header--criar">
                <p><a href="/">Criar</a></p>
            </div>
        </div>
        <div className="rooms__content">
            <Room img={person1} />
            <Room img={person2} />
            <Room img={person3} />
            <Room img={person4} />
            <Room img={person1} />
            <Room img={person2} />
        </div>
    </div>
)

export default Rooms;