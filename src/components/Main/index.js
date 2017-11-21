import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Games from '../Games';
import FeaturedStreams from '../../containers/FeaturedStreams';
import ListStreamsByGame from '../../containers/ListStreamsByGame';
import WatchStream from '../../containers/WatchStream';

import './main.css';
export default class Main extends Component {
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
        </div>
      </div>
    );
  }
}

