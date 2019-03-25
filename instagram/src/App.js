import React, {Component} from 'react';
import './App.css';

import dummyData from './dummy-data';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData,
      search: ''
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header onChange={this.onInputChange} />
      </div>
    );
  }
}

export default App;
