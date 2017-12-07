import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class AuthWithTwitchApiWasSuccessful extends Component {
    componentWillMount() {
        const paramsObject = {};
        let params = document.location.hash;
        params = params.slice(1);
        params = params.split("&");
        
        params.forEach(param => {
            let splitParam = param.split("=");
            paramsObject[splitParam[0]] = splitParam[1]
        })

        this.accessToken = paramsObject.access_token;

        this.handleRedirect()
    }

    handleRedirect() {
        if (this.accessToken) {
            axios.get(`https://api.twitch.tv/kraken/user`, {
                headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
                    'Authorization': `OAuth ${this.accessToken}`
                }
            })
            .then(res => {
                return res.data
            })
            .then(userObj => {
                // Call LogIn reducer
                this.props.logIn(this.accessToken, userObj);
                this.props.redirect("/user/dashboard");
            })
            .catch(err => {
                console.error(err);
            });
        } else {
            console.error("Oh snap. There's some error going on. Try again!");
        }  
    }

    render() {
        return (
            <div>
                Auth is done, i'll save the token stuff and redirect you..
            </div>
        )
    }
}
