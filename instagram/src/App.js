import React, { Component, Fragment } from 'react';
import './App.css';

import dummyData from './dummy-data';

// Components
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

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
          <Posts />
        </Fragment>
    );
  }
}

export default App;
