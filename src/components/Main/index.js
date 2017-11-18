import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Games from '../Games';
import Streams from '../Streams';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/popular" render={ props => 
          <Streams {...this.props} />
        } />
        <Route path="/games" render={ props => 
          <Games {...this.props} />
        } />
        <Footer />
      </div>
    );
  }
}

