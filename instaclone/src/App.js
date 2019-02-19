import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      dummy: dummyData,
    };
  };

  render() {
    return (
      <div className="App">
        <header>
        <SearchBar />
        </header>
        <PostContainer dummy={this.state.dummy} />
      </div>
            );
            }
                                                      };
               
export default App;
