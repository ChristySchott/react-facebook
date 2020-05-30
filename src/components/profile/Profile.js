import React from 'react';

import User from './User/User'
import MyContent from './MyContent/MyContent';

const Profile = () => (
    <div>
        <div className="container-profile__header"></div>
        <div className="container-profile__header--menu"></div>
        <div className="container-profile">
            <User />
            <MyContent />
        </div>
    </div>
)

export default Profile;