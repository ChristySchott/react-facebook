import React from 'react';

import { MdVideoCall } from 'react-icons/md';
import { FaFileImage, FaSmileBeam } from 'react-icons/fa';

import profile from '../../../../assets/profile-medium.png';

const Status = () => (
    <div className="status wrapper">
        <div className="status__header">
            <div className="status__header--img">
                <img src={profile} alt=""/>
            </div>
            <div className="status__header--input">
                <input className="input input--status" type="text" placeholder="No que está pensando, Christy?"/>
            </div>
        </div>

        <div className="status__actions">
            <ul>
                <li><a href="/"><MdVideoCall size={20} color="red" className="svg"/> Vídeo ao vivo</a></li>
                <li><a href="/"><FaFileImage size={18} color="green" className="svg"/> Foto/Vídeo</a></li>
                <li><a href="/"><FaSmileBeam size={18} color="#FFBD1B" className="svg"/> Sentimento/atividade</a></li>
            </ul>
        </div>
    </div>
)

export default Status;