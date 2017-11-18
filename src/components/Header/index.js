import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => (
    <header>
        <div className="logo">Twitch</div>
        <nav>
            <ul>
                <li><Link to="/popular" className="header__nav__link">Popular</Link></li>
                <li><Link to="/games" className="header__nav__link">Games</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;