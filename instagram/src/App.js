import React, { Component } from 'react';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data'
import SearchBar from './Components/SearchBar/SearchBar'
import PropTypes from "prop-types"
import Authentication from './Authentication'
import styled from 'styled-components'

const Inandout = styled.button `
font-size:1em;
font-weight: bold;
border-radius: 20px;
background-color:lightcyan;
margin:10px;
width: 200px;
padding:20px;
`

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts:[],
      filtered:[],
      search:'',
      comments: [],
    } 
  }

  componentDidMount() {
    this.setState({posts: dummyData}) 

    }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {search:value}
    );
    }

    searchHandler = event => {
      event.preventDefault();
      const filtered=this.state.posts.filter(post => post.username === this.state.search) 

      this.setState({
        filtered: filtered,
        search: '',
    });
  
    }

    Logout = event => {
      event.preventDefault()
      localStorage.clear();
      window.location.reload();
  }



    submitHandler = event => {
      event.preventDefault();
          const timestamp = event.target.getAttribute('data-id');

          const posts=this.state.posts.map(post => {
            if (timestamp===post.timestamp) {
              return {...post, likes: post.likes + 1};
            }
          
            else {return post;}
          })
      
  
        this.setState({
            posts: posts,
        });
    }


  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} searchHandler={this.searchHandler}/>
      {this.state.filtered.length>0 ?
      <PostContainer posts={this.state.filtered} submitHandler={this.submitHandler} /> :
      <PostContainer posts={this.state.posts} submitHandler={this.submitHandler}/>  }
      <Inandout onClick={this.Logout}><p>Log Out</p></Inandout>
      </div>
    );
  }
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageURL: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
        text: PropTypes.string,
        }
      ))
    }))
}

export default Authentication(App);
