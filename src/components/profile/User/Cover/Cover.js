import React from 'react';
import { FaCamera } from 'react-icons/fa';

import cover from '../../../../assets/cover.jpg';
import profile from '../../../../assets/profile-s1.png';

const Cover = () => (
    <div className="cover">
       <img src={cover} alt="Cover"/>
       <div className="cover__photo">
            <img src={profile} alt=""/>
            <div className="cam">
                <FaCamera size={24} />
            </div>
       </div>
       <div className="cover__change">
           <p><FaCamera size={18} /><span>Editar foto da capa</span></p>
       </div>
    </div>
)

export default Cover;