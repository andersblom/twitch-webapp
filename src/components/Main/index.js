import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Games from '../Games';
import FeaturedStreams from '../../containers/FeaturedStreams';
import ListStreamsByGame from '../../containers/ListStreamsByGame';
import WatchStream from '../../containers/WatchStream';
import Authentication from '../../containers/Authentication';

import './main.css';
export default class Main extends Component {
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
        </div>
      </div>
    );
  }
}

