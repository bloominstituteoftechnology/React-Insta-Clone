import React, { Component } from 'react';
import Instagram from './Instagram';

import './assets/css/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Instagram />
      </div>
    );
  }
}

export default App;