import React, { Component } from 'react';
import axios from 'axios';

export default class UserDashboard extends Component {
    render() {
        return (
            <h1>Welcome {this.props.user.userData.display_name}!</h1>
        )
    }
}