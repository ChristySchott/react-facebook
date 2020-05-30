import React from 'react';

import { FiPlus } from 'react-icons/fi';

const StoryAdd = (props) => (
    <div className="story story--me">
        <div className="story__text">
            <div className="story__img story__img--me">
                <FiPlus size={26} />
            </div>
            <div className="story__name">
                <p>{props.name}</p>
            </div>
        </div>
        <img src={props.background} alt=""/>
    </div>
)

export default StoryAdd;