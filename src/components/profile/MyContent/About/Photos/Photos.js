import React from 'react';

import Gallery from './Gallery';

const Photos = () => (
    <div className="photos wrapper container-about">
        <div className="photos__header">
            <h1>Fotos</h1>
            <a href="/">Ver mais</a>
        </div>
        <div className="photos__gallery">
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
        </div>
    </div>
)

export default Photos;