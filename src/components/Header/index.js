import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import TwitchGlitchWhite from './Glitch_White_RGB.png';

const Header = () => (
    <header>
        <Link to="/" className="logo"><img src={TwitchGlitchWhite} alt="Twitch logo" /></Link>
        <nav>
            <Link to="/" className="header__nav__link"><i className="fa fa-bolt" aria-hidden="true"></i></Link>
            <Link to="/games" className="header__nav__link"><i className="fa fa-gamepad" aria-hidden="true"></i></Link>
        </nav>
    </header>
);

export default Header;