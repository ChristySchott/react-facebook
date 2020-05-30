import React from 'react';
import { MdVideoCall } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

const Contact = () => (
    <div className="contact">
        <div className="contact__title">
            <h4 className="title">Contatos</h4>
        </div>

        <div className="contact__actions">
            <ul>
                <li><a href="/"><MdVideoCall size={24}/></a></li>
                <li><a href="/"><AiOutlineSearch size={24}/></a></li>
                <li><a href="/"><FiMoreHorizontal size={24}/></a></li>
            </ul>
        </div>
    </div>
)

export default Contact;