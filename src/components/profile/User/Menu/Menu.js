import React from 'react';

import { FaCaretDown } from 'react-icons/fa';
import { GoPencil, GoSearch } from 'react-icons/go';
import { MdRemoveRedEye, MdMoreHoriz } from 'react-icons/md';

const Menu = () => (
    <div className="menu">
        <div className="menu__info">
            <h1>Christy Hauschild Schott</h1>
            <a href="/">Adicionar biografia</a>
        </div>
        <div className="menu__actions">
            <div className="menu__actions--left">
                <ul>
                    <li><a href="/" className="active">Linha do tempo</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Amigos <span>1041</span></a></li>
                    <li><a href="/">Fotos</a></li>
                    <li><a href="/">Mais<FaCaretDown size={16} /></a></li>
                </ul>
            </div>
            <div className="menu__actions--right">
                <ul>
                    <li><a href="/"><GoPencil size={16} /> Editar perfil</a></li>
                    <li><a href="/"><MdRemoveRedEye size={20} /></a></li>
                    <li><a href="/"><GoSearch size={16} /></a></li>
                    <li><a href="/"><MdMoreHoriz size={20} /></a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default Menu;