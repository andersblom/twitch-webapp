import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log(process.env.REACT_APP_TWITCH_CLIENT_ID);
    return (
      <div className="App">
        hi im app
      </div>
    );
  }
}

