import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import dummyData from './dummy-data';

class App extends React.Component {
  render(){
    return(
      <div>
        <SearchBar data={dummyData} />
        <PostContainer data={dummyData} />
        
      </div>
    )
  }
}

export default App 