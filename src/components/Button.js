import React from 'react';

const Button = props => (
    <div className="button">
               <div className="button--label">
                    <p> {props.text} </p>
                    {props.icon}
               </div>
    </div>
)

export default Button;