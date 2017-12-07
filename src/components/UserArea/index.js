import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import Login from './Login';
import AuthWithTwitchApi from './AuthWithTwitchApi';
import AuthWithTwitchApiWasSuccessful from './AuthWithTwitchApiWasSuccessful';
import UserDashboard from './UserDashboard';

export default class UserArea extends Component {
    render () {
        const props = this.props;
        const currentUrl = props.match.url;

        return (
            <div>
                <Route exact path={`${currentUrl}/login`} component={Login} />
                <Route exact path={`${currentUrl}/login/auth`} component={AuthWithTwitchApi}/>
                <Route path={`${currentUrl}/login/auth/complete`} render={() => <AuthWithTwitchApiWasSuccessful logIn={this.props.logIn} />} />
                <Route path={`${currentUrl}/dashboard`} render={() => <UserDashboard user={props.user} />} />
                <Route path={`${currentUrl}/logout`} render={() => <div>I'll log you out.</div>} />
            </div>
        )
    }
}