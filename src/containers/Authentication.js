import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from '../actions/userActionCreators';

import UserArea from '../components/UserArea';

class AuthRedirect extends Component {
    render() {
        console.log(this.props);
        const isAuthed = this.props.user.isLoggedIn;
        return (
            <Route path="/user" render={(routerProps) => {
                return isAuthed 
                ?  <UserArea {...routerProps} {...this.props} />
                :  <Redirect to="/login" />
            }} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(userActionCreators, dispatch)
}

const Authentication = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);

export default Authentication;