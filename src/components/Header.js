import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import market from '../assets/market.png';
import profile from '../assets/profile-small.png';
import { TiHome, TiGroup } from 'react-icons/ti';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFacebookMessenger, FaBell, FaCaretDown } from 'react-icons/fa';
import { BsColumns, BsDisplay, BsPlus } from 'react-icons/bs';

const Header = () => (
    <header className="header">
        <div className="header__left">
            <div className="header__left--logo-box">
                <Link to="/">
                    <img src={logo} alt="Facebook logo" style={{width: '40px'}}/>
                </Link>
            </div>
            
            <div className="header__left--input">
                <input type="text" placeholder="Pesquisar no Facebook" className="input" />
                <AiOutlineSearch size={24} className="search" />
            </div>
        </div>

        <div className="header__menu">
            <ul>
                <li><a href="/"><TiHome size={28} className="icon"/></a></li>
                <li><a href="/"><BsDisplay size={28} className="icon"/></a></li>
                <li><a href="/"><img src={market} alt="Market" style={{width: '30px'}} /></a></li>
                <li><a href="/"><TiGroup size={28} className="icon icon__group" /></a></li>
                <li><a href="/"></a><BsColumns size={26}  className="icon"/></li>
            </ul>
        </div>

        <div className="header__right">
            <Link to="/profile">
                <div className="header__right--profile">
                    <img src={profile} alt="Profile"/>
                    <p>Christy</p>
                </div>
            </Link>

            <nav className="header__right--nav">
                <ul>
                    <li><a href="/">
                        <div className="container-icon">
                            <BsPlus size={24} className="icon--right"/>
                        </div>
                        
                        </a></li>
                    <li><a href="/">
                        <div className="container-icon">
                            <FaFacebookMessenger size={24} className="icon--right"/>
                            <div className="notification">3</div>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="container-icon">
                            <FaBell size={24} className="icon--right"/>
                            <div className="notification">8</div>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="container-icon">
                            <FaCaretDown size={24} className="icon--right"/>
                        </div>
                    </a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;