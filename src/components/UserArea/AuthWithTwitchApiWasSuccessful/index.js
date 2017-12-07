import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    }

    handleRedirect() {
        if (this.accessToken) {
            // Call LogIn reducer
            this.props.logIn(this.accessToken);
            return (<Redirect to="/user/dashboard" />)
        } else {
            return "Oh snap. There's some error going on. Try again!"
        }  
    }
    render() {
        return (
            <div>
            Auth is done, i'll save the token stuff and redirect you..<br />
            {this.handleRedirect()}
            </div>
        )
    }
}
