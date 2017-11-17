import React, { Component } from 'react';

import Games from '../Games';
import Streams from '../Streams';

export default class Main extends Component {
  render() {
    return (
      <div>
        hi im Main
        <Games {...this.props} />
        <Streams {...this.props} />
      </div>
    );
  }
}

