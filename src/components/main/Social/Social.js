import React from 'react';

import Birthday from './Birthday/Birthday';
import Chat from './Chat/Chat';

const Social = (props) => (
    <div className="social-container">
        <div className="social">
            <Birthday birthday={props.birthday} />
            <Chat/>
        </div>
    </div>
)

export default Social;