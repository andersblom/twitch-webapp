import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import AuthWithTwitchApi from './AuthWithTwitchApi';
import AuthWithTwitchApiWasSuccessful from './AuthWithTwitchApiWasSuccessful';
import UserDashboard from './UserDashboard';

export default class UserArea extends Component {
    render () {
        const props = this.props;
        const currentUrl = props.match.url;

        return (
            <div>
                <Route path={`${currentUrl}/dashboard`} render={(routerProps) => <UserDashboard {...routerProps} user={props.user} logOut={props.logOut} />} />
                <Route path={`${currentUrl}/logout`} render={() => <div>I'll log you out.</div>} />
            </div>
        )
    }
}