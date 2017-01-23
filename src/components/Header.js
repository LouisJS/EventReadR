import React, { Component } from 'react';
import logo from '../resources/logo/logo.svg';
import '../resources/css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <h2>EventReadR</h2>
            </div>
        );
    }
}

export default Header;
