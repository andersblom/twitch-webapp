import React, { Component } from 'react';

export default class AuthWithTwitchApi extends Component {
    componentDidMount() {
        const apiRedirectUrl = 'http://localhost:3000/user/login/auth/complete/';
        // Redirecting to Twitch OAuth
        window.location = `https://api.twitch.tv/kraken/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${apiRedirectUrl}&response_type=token+id_token&scope=openid+user_read`;
    }
    render() {
        return (
            <div>Redirecting you to Twitch...</div>
        )
    }
}
