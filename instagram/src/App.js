import React, { Component, Fragment } from 'react';
import './App.css';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData.map(data => data)
    })
  }

  render() {
    return (
        <Fragment>
          <header>
            <SearchBar/>
          </header>
        </Fragment>
    );
  }
}

export default App;
