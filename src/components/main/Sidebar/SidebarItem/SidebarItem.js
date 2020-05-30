import React from 'react';

const SidebarItem = (props) => (
    <div className="sidebar-item">
        <div className="sidebar-item__box-img">
            <img src={props.img} alt="Sidebar Item"/>
            <div className={props.class}></div>
        </div>
        <div className="sidebar-item__text">
            {props.text}
        </div>
    </div>
)

export default SidebarItem;