import React from 'react';

const Story = (props) => (
    <div className="story">
        <div className="story__text">
            <div className="story__img">
                <img src={props.img} alt=""/>
            </div>
            <div className="story__name">
                <p>{props.name}</p>
            </div>
        </div>
        <img src={props.background} alt=""/>
    </div>
)

export default Story;