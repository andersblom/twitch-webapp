import React from 'react';
import { Link } from 'react-router-dom';

import TwitchWhiteTextLogo from './Twitch_White_RGB.png';

import './login.css';

const Login = () => (
    <div className="login__container">
        <div className="login__panel">
            <div className="login__panel__header">
                <img src={TwitchWhiteTextLogo} alt="Twitch text logo" /> 
            </div>
            <div className="login__panel__textWarning">
                <p>To log in with your Twitch account, you will be redirected to Twitch's website 
                where you must authorize this application to access your information.</p>
                <p>No worries, though. We only do so to access what streams you follow, so we can pull those up for you.</p>
            </div>
            <Link className="login__btn primary" to="/login/auth">Log in using Twitch</Link>
        </div>
    </div>
)

export default Login;