import React from 'react';

import Stories from './Stories/Stories';
import Status from './Status/Status';
import Rooms from './Rooms/Rooms';
import Content from './Content/Content';

const Feed = () => (
    <div className="feed">
        <Stories />
       <div className="feed__container">
            <Status />
            <Rooms />
            <Content />
       </div>
    </div>
)

export default Feed;