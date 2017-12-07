import React, { Component } from 'react';
import axios from 'axios';

export default class UserDashboard extends Component {
    componentDidMount() {
        axios.get(`https://api.twitch.tv/kraken/user`, {
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
                'Authorization': `OAuth ${this.props.user.token}`
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}