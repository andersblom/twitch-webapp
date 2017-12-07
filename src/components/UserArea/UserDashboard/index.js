import React, { Component } from 'react';
import axios from 'axios';

export default class UserDashboard extends Component {
    getRandomWelcomeMessage() {
        const welcomeMessages = [
            "Pwned some noobs today?", 
            "Ready to watch some games?", 
            "You're looking sharp today",
            "wwwwwwwwwwwwwwadwwwdsawwwwd can't move"
        ];
        let i = Math.random();
        i = Math.floor(i * welcomeMessages.length + 1)
        return welcomeMessages[i-1];
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.userData.display_name}!</h1>
                <h2>{this.getRandomWelcomeMessage()}</h2>
            </div>
        )
    }
}