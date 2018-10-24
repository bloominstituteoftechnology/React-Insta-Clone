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
      return (comment.username.includes(event.target.value) ? comment : null)
      }
    )

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
    <SearchBar stringSearch={this.state.stringSearch} postSearch={this.state.postSearch} handleSearch={this.handleSearch} data={this.state.data} />
    <i className="far fa-compass"></i>
    <i className="far fa-user"></i>
    </div>
    <PostContainer data={this.state.search.length > 0 ? this.state.search : this.state.data} />
    </div>
    )
  }
}

export default Authenticate(App)