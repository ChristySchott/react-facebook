import React from 'react';

import Post from '../../../../main/Feed/Content/Posts/Posts';
import profile from '../../../../../assets/profile-medium.png';
import postImg from '../../../../../assets/post.jpg';
import postImg2 from '../../../../../assets/post2.jpg';
import postImg3 from '../../../../../assets/post3.jpg';

const MyPost = () => (
    <div>
        <Post name="Christy Schott" img={postImg} user={profile} />
        <Post name="Christy Schott" img={postImg2} user={profile} />
        <Post name="Christy Schott" img={postImg3} user={profile} />
    </div>
)

export default MyPost;