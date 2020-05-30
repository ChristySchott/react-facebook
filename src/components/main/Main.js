import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Social from './Social/Social';
import Modal from '../UI/Modal/Modal';
import ModalBirthday from '../UI/Modal/ModalBirthday';

export default class Main extends Component {
    state = {
        closed: false,
        opened: false
    }

    birthdayHandler = () => {
        this.setState({opened: true});
    }

    birthdayCancelHandler = () => {
        this.setState({opened: false});
    }

    render() {
        return (
            <div className="container">
                <Modal show={this.state.opened} modalClosed={this.birthdayCancelHandler}>
                <ModalBirthday />
                </Modal>
                <Sidebar />
                <Feed />
                <Social birthday={this.birthdayHandler} />
            </div>
        )
    }
}
    


