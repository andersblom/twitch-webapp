import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Games from '../Games';
import Streams from '../Streams';
import ListStreamsByGame from '../ListStreamsByGame';
import WatchStream from '../../containers/WatchStream';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={ props => 
          <Streams {...this.props} />
        } />
        <Route path="/games" render={ props => 
          <Games {...this.props} />
        } />
        <Route path="/game/:gameName" render={ props => 
          <ListStreamsByGame {...this.props} {...props} />
        } />
        <Route path="/watch/:streamerName" component={WatchStream} />
        <Footer />
      </div>
    );
  }
}

