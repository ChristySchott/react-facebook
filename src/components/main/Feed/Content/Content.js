import React from 'react';

import Post from './Posts/Posts';
import postImg from '../../../../assets/post.jpg';
import postImg2 from '../../../../assets/post2.jpg';
import postImg3 from '../../../../assets/post3.jpg';
import postImg4 from '../../../../assets/post4.jpg';
import user1 from '../../../../assets/post-person1.png';
import user2 from '../../../../assets/post-person2.png';
import user3 from '../../../../assets/post-person3.png';
import user4 from '../../../../assets/post-person4.png';

const Content = () => (
    <div>
       <Post name="Fulano" img={postImg} user={user1} />
       <Post name="Frida Kahlo" img={postImg2} user={user2} />
       <Post name="Jon Snow" img={postImg3} user={user3} />
       <Post name="Someone" img={postImg4} user={user4} />
    </div>
)

export default Content;