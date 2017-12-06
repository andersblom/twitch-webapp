import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Games from '../Games';
import FeaturedStreams from '../../containers/FeaturedStreams';
import ListStreamsByGame from '../../containers/ListStreamsByGame';
import WatchStream from '../../containers/WatchStream';
import UserArea from '../../components/UserArea';

import './main.css';
export default class Main extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/games/top?limit=100&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      this.props.setGames(res.data.top)
    })
    .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div className="appWrapper">
        <Header />
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
            <Route path="/user" component={UserArea} />
        </div>
      </div>
    );
  }
}

