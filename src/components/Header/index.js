import React from 'react';
import { Link } from 'react-router-dom';

import RenderSvg from '../RenderSvg';

import './header.css';

import TwitchGlitchWhite from './Glitch_White_RGB.png';

const Header = ({ isLoggedIn }) => (
    <header>
        <Link to="/" className="logo"><img src={TwitchGlitchWhite} alt="Twitch logo" /></Link>
        <nav>
            <Link to="/" className="header__nav__link"><RenderSvg iconName="zap" strokeWidth={1.3} stroke="var(--text_gray)" /></Link>
            <Link to="/games" className="header__nav__link"><RenderSvg iconName="headphones" strokeWidth={1.3} stroke="var(--text_gray)" /></Link>
            {isLoggedIn 
                ? <Link to="/user/dashboard" className="header__nav__link header__nav__link--user"><img src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-70x70.jpg" /></Link>
                : <Link to="/user/login" className="header__nav__link header__nav__link--user"><RenderSvg iconName="user" strokeWidth={1.3} stroke="var(--text_gray)" /></Link> 
            }
        </nav>
    </header>
);

export default Header;