import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import dummyData from './dummy-data';

class App extends React.Component {
constructor(){
  super()
  this.state = {
    data: [],
    search: []
  }
}
  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

  handleSearch = event => {
    const comments = this.state.data.filter(comment => {
      if (comment.username.includes(event.target.value)) {
          return comment ;
      }
    })

    this.setState({
      search: comments 
    })
  }
  render(){
    return(
    <div className='App' >
    <div className='searchBar'>  
    <i className="fab fa-instagram"></i>
    <span>|</span>
    <span>Instagram</span>
    <SearchBar handleSearch={this.handleSearch} data={this.state.data} />
    <i className="far fa-compass"></i>
    <i className="far fa-user"></i>
    </div>
    <PostContainer data={this.state.data} />
    </div>
    )
  }
}

export default Authenticate(App)