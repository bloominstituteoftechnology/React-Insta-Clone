import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authentication from './components/Authentication/Authentication';

import styled from 'styled-components';

const AppDiv = styled.div `
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  
  ${props => (props.type === 'primary' ? `background: #FAFAFA;` : null)}

`


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: ""
    }
  }

  componentDidMount() {
    console.log('Component did mount!')
    this.setState({ data: dummyData })
  }

  searchInput = event => {
    this.setState({ [event.target.name] : event.target.value })  
  }

  searchSubmit = event => {
    console.log('searching!');
    event.preventDefault();
    // || let filteredData = filteredData.slice()
    // Making a new copy of the array because State is immutable, we should never be manipulating data on the state directly
    // So a copy is made to re-set the state using setState() instead of mutating old data... 
    // Maybe because we're requesting data that is not ours
    let filteredData = [...this.state.data]; 
    filteredData = filteredData.filter(element => {
      if (element.username === this.state.searchInput) {
        return element; 
      }
    })
    this.setState({data: filteredData})
  }

  logoutClick = event => {
    localStorage.removeItem("username");
    window.location.reload();
  }

  render() {
    console.log('Rendering!')
    return (
      <AppDiv type="primary">
        <PostsPage 
        searchInput={this.searchInput} 
        searchSubmit={this.searchSubmit}
        searchLogout={this.logoutClick}
        postsProps={this.state.data} />
      </AppDiv>
    );
  }
}

export default Authentication(App);
