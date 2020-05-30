import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import Shortcut from './Shortcut/Shortcut';
import Button from '../../Button';

import { BsChevronDown } from 'react-icons/bs';
import profile from '../../../assets/profile-small.png';
import messenger from '../../../assets/messenger.png';
import marketplace from '../../../assets/marketplace.png';
import play from '../../../assets/play.png';
import flag from '../../../assets/flag.png';
import group from '../../../assets/group.png';
import event from '../../../assets/event.png';

const Sidebar = () => {
    return(
    <div className="sidebar-container">
       <div className="sidebar">
            <SidebarItem img={profile} text="Christy Hauschild Schott" />
            <SidebarItem img={messenger} text="Messenger" />
            <SidebarItem img={marketplace} text="Compra e venda" />
            <SidebarItem img={play} text="Vídeos" />
            <SidebarItem img={event} text="Eventos" />
            <SidebarItem img={flag} text="Páginas" />
            <SidebarItem img={group} text="Grupos" />
            <Button text="Ver mais" icon={<BsChevronDown size={18}/>} />
            <Shortcut />
       </div>
    </div>
    )
}

export default Sidebar;