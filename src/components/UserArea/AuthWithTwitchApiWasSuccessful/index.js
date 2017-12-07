import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class AuthWithTwitchApiWasSuccessful extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }
    componentWillMount() {
        // Object that will be saved later when populated
        this.stateFromParams = {};
        // Getting the token and other stuff from the url hash
        let params = document.location.hash;
        // removing the hash
        params = params.slice(1);
        // Splitting into array of own params key/values
        params = params.split("&");
        
        // Pairing each param to eachother in the object from earlier
        params.forEach(param => {
            let splitParam = param.split("=");
            this.stateFromParams[splitParam[0]] = splitParam[1]
        });

        // Setting a component wide accesstoken property
        this.accessToken = this.stateFromParams.access_token;
        console.log(this.stateFromParams);
        this.handleRedirect()
    }

    handleRedirect() {
        // If something goes bad or user declines Twitch OAuth, 
        // An error key/val pair is generated in componentWillMount()
        // If this key/val is not present, and there is an accessToken assume no error
        if (!this.stateFromParams.error && this.accessToken) {
            axios.get(`https://api.twitch.tv/kraken/user`, {
                headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
                    'Authorization': `OAuth ${this.accessToken}`
                }
            })
            .then(res => {
                // Sending this to the next .then()
                return res.data
            })
            .then(userObj => {
                // Setting error-state to display a message until redirect kicks in.
                this.setState({
                    error: false
                });
                // Call LogIn reducer
                this.props.logIn(this.accessToken, userObj);
                // Redirect user
                this.props.redirect("/user/dashboard");
            })
            .catch(err => {
                console.error(err);
            });
            // This else is in case there's no accessToken 
            // Or the stateFromParams Object holds an error-key.
        } else {
            console.error("Oh snap. There's some error going on. Try again!");
            this.setState({
                error: true
            })
        }  
    }

    render() {
        return (
            <div>
                { this.state.error 
                    ? "Something went bad and we couldn't connect :( try again... pretty please?" 
                    : "Great success. Let us just save your authorization, and we'll show you to your Dashboard!"
                }
            </div>
        )
    }
}
