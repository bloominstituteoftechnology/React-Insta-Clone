import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import PostContainer from "./components/PostContainer/PostContainer"
import dummyData from './dummy-data'
import styled from 'styled-components'

const StyledApp = styled.div`
  max-width: 800px;
  margin: 1.5% auto;
`
class App extends Component {
  constructor() {
    super()
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    this.setState({
      data : dummyData
    });
  }
  render() {
    return (
      <StyledApp>
      <SearchBar />
      <PostContainer data={this.state.data}/>
      </StyledApp>
    );
  }
}

export default App;
