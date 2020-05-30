import React from 'react';

import gift from '../../../../assets/gift.png';

const Birthday = (props) => (
    <div className="birthday" onClick={props.birthday}>
        <div className="birthday__title">
            <h4 className="title">Aniversários</h4>
        </div>
        <div className="birthday__content">
            <div className="birthday__content--img">
               <img src={gift} alt=""/>
            </div>
            <div className="birthday__content--text">
                <p>O aniversário de <strong>Fulano de Tal</strong> é hoje</p>
            </div>
        </div>
    </div>
)

export default Birthday;