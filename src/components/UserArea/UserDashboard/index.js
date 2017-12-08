import React, { Component } from 'react';
import axios from 'axios';

export default class UserDashboard extends Component {
    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }
    getRandomWelcomeMessage() {
        const welcomeMessages = [
            "Pwned some noobs today?", 
            "Ready to watch some games?", 
            "You're looking sharp today",
            "wwwwwwwwwwwwwwadwwwdsawwwwd can't move"
        ];
        let i = Math.random();
        i = Math.floor(i * welcomeMessages.length)
        return welcomeMessages[i];
    }
    
    handleLogout() {
        localStorage.clear(process.env.REACT_APP_LOCALSTORAGE_NAME);
        this.props.logOut();
        this.props.history.push("/user/login");
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.userData.display_name}!</h1>
                <h2>{this.getRandomWelcomeMessage()}</h2>
                <div>
                    <button onClick={this.handleLogout}>I wanna log out</button>
                </div>
            </div>
        )
    }
}