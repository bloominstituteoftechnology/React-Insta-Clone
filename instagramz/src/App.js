import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

import FilterTest from './FilterTest';



const contentStuff = dummyData;

class App extends Component {
  constructor() {
    super();

    this.state = {
        content: [],
        search: 'everything'
      }
    

  }

  componentDidMount() {
    
    this.setState (
      {
        content: dummyData,
      }
    )

    console.log(this.state.content)
  }

  filter = info => {
    if (this.state.search = 'everything'){
      return this.state.content;
    }

  } 

  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer content={this.state.content} />
            
      <h1>Hello React Thingy</h1>
      
      <FilterTest />

      </div>
    );
    
  }
}

dummyData.propTypes = {
  dummyData: PropTypes.array
};

export default App;
