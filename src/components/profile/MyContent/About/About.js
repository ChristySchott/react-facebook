import React from 'react';

import Copyright from '../../../Copyright';

import Presentation from './Presentation/Presentation';
import Photos from './Photos/Photos';
import Friends from './Friends/Friends';


const About = () => (
    <div className="about">
        <Presentation />
        <Photos />
        <Friends />
        <div className="about__copyright">
            <Copyright />
        </div>
    </div>
)

export default About;