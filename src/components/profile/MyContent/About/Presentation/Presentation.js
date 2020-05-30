import React from 'react';

import Button from '../../../../Button';

import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';

const Presentation = () => (
    <div className="about__presentation wrapper container-about">
        <h1>Apresentação</h1>

        <div className="about__presentation--list">
            <ul>
                <li><FaGraduationCap size={18} color="#CED0D4" /><span>IFSul Venâncio Aires</span></li>
                <li><BsHouseDoorFill size={18} color="#CED0D4"/><span>Mora em Venâncio Aires</span></li>
                <li><FaMapMarkerAlt size={18} color="#CED0D4"/><span>De Santa Maria</span></li>
                <li><MdWatchLater size={18} color="#CED0D4" /><span>Entrou em janeiro de 2012</span></li>
            </ul>
        </div>

        <div className="about__presentation--buttons">
            <Button text="Editar detalhes" />
            <Button text="Editar destaques" />
        </div>
    </div>
)

export default Presentation;