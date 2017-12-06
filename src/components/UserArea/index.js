import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserArea extends Component {
    componentDidMount() {
        const paramsObject = {};
        let params = document.location.hash;
        params = params.slice(1);
        params = params.split("&");
        
        params.forEach(param => {
            let splitParam = param.split("=");
            paramsObject[splitParam[0]] = splitParam[1]
        })
        console.log(paramsObject);
    }
    render () {
        return (
            <div>
                <h1>User area</h1>
                <Link to="/user/auth">Log in using Twitch</Link>
            </div>
        )
    }
}