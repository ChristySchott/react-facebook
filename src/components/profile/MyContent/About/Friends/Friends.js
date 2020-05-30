import React from 'react';

import Friend from './Friend';

import photo from '../../../../../assets/photo.png';

const Friends = () => (
    <div className="photos wrapper container-about">
        <div>
            <div className="photos__header">
                <h1>Amigos</h1>
                <a href="/">Ver mais</a>
            </div>
                <p className="friends-count"><a href="/">1.041 amigos</a></p>
        </div>
        <div className="photos__gallery">
            <Friend name="Frida Kahlo" photo={photo} />
            <Friend name="Frida Kahlo" photo={photo} />
            <Friend name="Frida Kahlo" photo={photo} />
            <Friend name="Frida Kahlo" photo={photo} />
            <Friend name="Frida Kahlo" photo={photo} />
            <Friend name="Frida Kahlo" photo={photo} />
        </div>
    </div>
)

export default Friends;