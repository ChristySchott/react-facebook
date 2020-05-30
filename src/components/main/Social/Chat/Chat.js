import React from 'react';

import Contact from './Contact/Contact';
import SidebarItem from '../../Sidebar/SidebarItem/SidebarItem';

import profile from '../../../../assets/profile-small.png';
import person1 from '../../../../assets/person1.png';
import person2 from '../../../../assets/person2.png';
import person3 from '../../../../assets/person3.png';
import person4 from '../../../../assets/person4.png';

const Chat = () => (
    <div>
        <Contact />
        <SidebarItem img={person1} class="room__online chat__online" text="Frida Kahlo" />
        <SidebarItem img={person2} class="room__online chat__online" text="Jon Snow" />
        <SidebarItem img={person3} text="Marcelo" />
        <SidebarItem img={person4} class="room__online chat__online" text="Fulano" />
        <SidebarItem img={person1} class="room__online chat__online" text="Frida Kahlo" />
        <SidebarItem img={person2} text="Jon Snow" />
        <SidebarItem img={person3} text="Marcelo" />
        <SidebarItem img={person4} class="room__online chat__online" text="Fulano" />
        <SidebarItem img={person1} class="room__online chat__online" text="Frida Kahlo" />
        <SidebarItem img={person2} text="Jon Snow" />
        <SidebarItem img={person3} class="room__online chat__online" text="Marcelo" />
        <SidebarItem img={person4} class="room__online chat__online" text="Fulano" />
    </div>
)

export default Chat;