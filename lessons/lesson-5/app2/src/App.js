import React, {Component} from 'react';
import './App.css';

import {YoutubeSearch} from './modules/youtube-search/youtube-search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YoutubeSearch/>
      </div>
    );
  }
}

export default App;
