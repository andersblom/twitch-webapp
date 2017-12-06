import React, { Component } from 'react';

export default class AuthWithTwitchApiWasSuccessful extends Component {
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
    render() {
        return (
            <div>Auth is done, i'll save the token stuff and redirect you..</div>
        )
    }
}
