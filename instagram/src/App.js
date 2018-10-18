import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import dummyData from './dummy-data';

class App extends React.Component {
  render(){
    return(
      <div className='App' >
      <div className='searchBar'>  
      <i className="fab fa-instagram"></i>
      <span>|</span>
      <span>Instagram</span>
        <SearchBar data={dummyData} />
        <i className="far fa-compass"></i>
        <i className="far fa-user"></i>
      </div>
        
        <PostContainer data={dummyData} />
        
      </div>
    )
  }
}

export default App 