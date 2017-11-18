import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Games from '../Games';
import Streams from '../Streams';

export default class Main extends Component {
  render() {
    return [
        <Header />,
        <Games {...this.props} />,
        <Streams {...this.props} />,
        <Footer />
    ];
  }
}

