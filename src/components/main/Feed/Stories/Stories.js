import React from 'react';

import Story from './Story/Story';
import StoryAdd from './Story/StoryAdd';

import person1 from '../../../../assets/person1.png';
import person2 from '../../../../assets/person2.png';
import person3 from '../../../../assets/person3.png';
import person4 from '../../../../assets/person4.png';
import story from '../../../../assets/story-me.png';
import story1 from '../../../../assets/story-1.jpg';
import story2 from '../../../../assets/story-2.jpg';
import story3 from '../../../../assets/story-3.jpg';
import story4 from '../../../../assets/story-4.png';

const Stories = () => (
    <div className="stories">
        <StoryAdd name="Adicionar ao seu story" background={story}/>
        <Story name="Frida Kahlo" img={person1} background={story1}/>
        <Story name="Jon Snow" img={person2} background={story2}/>
        <Story name="Marcelo" img={person3} background={story3}/>
        <Story name="Fulano" img={person4} background={story4}/>
    </div>
)

export default Stories;