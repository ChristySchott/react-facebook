import React from 'react';

import react from '../../../../assets/react.png';

import Copyright from '../../../Copyright';

const Shortcut = () => (
    <div className="sidebar__shortcut">
        <div className="sidebar__shortcut--title">
            <h4 className="title">Atalhos</h4>
        </div>
        <div className="sidebar-item sidebar__shortcut--item">
            <div className="sidebar-item__box-img">
                <img src={react} alt="Sidebar Item"/>
            </div>
            <div className="sidebar-item__text">
                <p>ReactJS Brasil</p>
            </div>
        </div>
        <Copyright />
    </div>
)

export default Shortcut