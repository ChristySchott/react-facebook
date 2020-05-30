import React from 'react';
import Button from '../../Button';

import birthday from '../../../assets/birthday.png'
import { FaSmile } from 'react-icons/fa';

const ModalBirthday = () => (
    <div className="modal-birthday">
        <div className="modal-birthday__header">
            <h1>Aniversário de amigos</h1>
        </div>
        <div className="modal-birthday__content">
            <div className="modal-birthday__content--box">
                <img src={birthday} alt="Birthday"/>
            </div>
            <div className="modal-birthday__content--text">
                <div className="modal-birthday__content--text--name">
                    <p>Fulano Tal</p>
                    <span>28 anos de idade</span>
                </div>
                <div className="modal-birthday__content--text--input">
                    <input type="text" className="input input__birthday" placeholder="Escreva na linha do tempo dele..."/>
                    <FaSmile size={18} color="gray" className="icon__birthday"/>
                </div>
            </div>
        </div>
            <Button text="Ver os próximos aniversários"/>
    </div>
)

export default ModalBirthday;