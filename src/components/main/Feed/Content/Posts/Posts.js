import React from 'react';

import like from '../../../../../assets/like.png';
import heart from '../../../../../assets/heart.png';
import surprise from '../../../../../assets/surprise.png';
import person from '../../../../../assets/person1.png';
import interact from '../../../../../assets/interact.png';

import { GiWorld } from 'react-icons/gi';
import { GoComment } from 'react-icons/go';
import { AiOutlineGif, AiOutlineLike } from 'react-icons/ai';
import { FiMoreHorizontal, FiCamera } from 'react-icons/fi';
import { FaRegSmile, FaRegShareSquare } from 'react-icons/fa';

const Posts = (props) => (
    <div className="wrapper post">
        <div className="post__header aux-padding">
            <div className="post__header--info">
                <div className="post__header--info--img">
                    <img src={props.user} alt="Post profile"/> 
                </div>
                <div className="post__header--info--name">
                    <p>{props.name}</p>
                    <a href="/">20 de maio às 19:35 &middot; <GiWorld size={12} /></a>
                </div>
            </div>
            <div className="post__header--more">
                <FiMoreHorizontal size={18} />
            </div>
        </div>

        <div className="post__img">
            <img src={props.img} alt=""/>
        </div>

        <div className="post__actions aux-padding">
            <div className="post__actions--reactions">
                <div className="post__actions--reactions__header">
                    <div className="emojis">
                        <ul>
                            <li><a href="/"><img src={like} alt="like"/></a></li>
                            <li><a href="/"><img src={heart} alt="heart"/></a></li>
                            <li><a href="/"><img src={surprise} alt="uau"/></a></li>
                        </ul>
                        <a className="count" href="/">62</a>
                    </div>
                    <div className="comments">
                        <a href="/">21 comentários</a>
                    </div>
                </div>

                <div className="post__actions--reactions__actions">
                    <div className="ul">
                        <a href="/"><AiOutlineLike size={18} style={{marginRight:'5px'}}/>Curtir</a>
                        <a href="/"><GoComment size={18} style={{marginRight:'5px'}}/>Comentar</a>
                        <a href="/"><FaRegShareSquare size={18} style={{marginRight:'5px'}}/>Compartilhar</a>
                    </div>
                </div>
            </div>

            <div className="post__actions--comments">
               <p className="title more"><a href="/">Ver mais 6 comentários</a></p>

                <div className="post__actions--comments--content">
                    <div className="box-img">
                        <img src={person} alt="Profile comment"/>
                    </div>

                    <div className="content">
                        <div className="box-comment">
                            <p>Fulano Tal</p>
                            <div className="comment-text">curti muito!!</div>
                        </div>
                        <div className="content__actions">
                            <ul>
                                <li><a href="/"><strong>Curtir &middot; </strong></a></li>
                                <li><a href="/"><strong>Responder &middot; </strong></a></li>
                                <li><a href="/">2 d</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="title more"><a href="/">Ver mais 3 comentários</a></p>
            </div>

            <div className="post__actions--interact">
                <div className="post__actions--interact--img">
                    <img src={interact} alt="Interact"/>
                </div>
                <div className="post__actions--interact--input">
                <input type="text" className="input interact" placeholder="Escreva um comentário..." />
                    <ul>
                        <li><a href="/"><FaRegSmile size={16} /></a></li>
                        <li><a href="/"><FiCamera size={16} /></a></li>
                        <li><a href="/"><AiOutlineGif size={16} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Posts;