import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from '../src/components/SearchBar/SearchBar';
import PostContainer from '../src/components/PostContainer/PostContainer';
import propTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })

  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.dummyData.length === 0 ? <h1>LOADING</h1> : 
        this.state.dummyData.map(item => {return <PostContainer data={item}/>})}
      </div>
    )
  }

}

App.propTypes = {
  dummyData: propTypes.array,
}

export default App;
