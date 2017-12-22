import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import * as userActionCreators from '../../actions/userActionCreators';

import Header from '../../components/Header';
import Games from '../../components/Games';
import FeaturedStreams from '../FeaturedStreams';
import ListStreamsByGame from '../ListStreamsByGame';
import WatchStream from '../WatchStream';
import Authentication from '../Authentication';

import Login from '../../components/UserArea/Login';
import AuthWithTwitchApi from '../../components/UserArea/AuthWithTwitchApi';
import AuthWithTwitchApiWasSuccessful from '../../components/UserArea/AuthWithTwitchApiWasSuccessful';

import './main.css';

class Main extends Component {
    componentWillMount() {
      // Getting initial stream of games.
      axios.get(`https://api.twitch.tv/kraken/games/top?limit=100&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
      .then(res => {
        this.props.setGames(res.data.top)
      })
      .catch(err => console.error(err));
  
      // Looking for localStoraged auth token
      const storage = process.env.REACT_APP_LOCALSTORAGE_NAME;
      const authTokenFromStorage = localStorage.getItem(storage);
      
      // If an authToken is in the localStorage, fetch this users information and run the login dispatch
      if (authTokenFromStorage !== null) {
        axios.get(`https://api.twitch.tv/kraken/user`, {
          headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
            'Authorization': `OAuth ${authTokenFromStorage}`
          }
        })
        .then(res => {
          // Dispatch login with authtoken + data
          this.props.logIn(authTokenFromStorage, res.data);
        })
        .catch(err => {
          if (err.response.data.status === 401 && err.response.data.error === "Unauthorized") {
            // Authtoken no longer works. Log out and clear storage
            localStorage.clear(storage);
            this.props.logOut();
          } else {
            console.error("Something bad happened. Here's some details:");
            console.dir(err);
          }
        });
      }
    }
    
    render() {
      return (
        <div className="appWrapper">
          <Header isLoggedIn={this.props.user.isLoggedIn} />
          <div className="contentWrapper">
              <Route exact path="/" render={ props => 
                <FeaturedStreams {...this.props} />
              } />
              <Route path="/games" render={ props => 
                <Games {...this.props} />
              } />
              <Route path="/game/:gameName" render={ props => 
                <ListStreamsByGame {...this.props} {...props} />
              } />
              <Route path="/watch/:streamerName" component={WatchStream} />
              <Route path="/user" component={Authentication} />
              
              <Route exact path="/login" component={Login} />
              <Route exact path="/login/auth" component={AuthWithTwitchApi}/>
              <Route path="/login/auth/complete" render={() => <AuthWithTwitchApiWasSuccessful redirect={this.props.history.push} logIn={this.props.logIn} />} />
          </div>
        </div>
      );
    }
  }
  

const mapStateToProps = state => {
    return {
        streams: state.streams,
        games: state.games,
        streamGrid: state.streamGrid,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(Object.assign({}, actionCreators, userActionCreators), dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;