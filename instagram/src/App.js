import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import SimpleStorage from "react-simple-storage";
import Authenticate from './components/Authentication/Authentication';
import LoginPage from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import styled from 'styled-components';

// const WrapperDiv = styled.div`
//     width: 100%;
//     height: 100%;
// `;
const WrapperDiv = styled.div`
  background-color: red;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      filterInput: ''
  }
  }

  // componentDidMount() {
  //   // if (!localStorage.getItem('posts')) {
  //     this.setState({
  //       posts: dummyData
  //     })
  //   // }
  //   // else {
  //   //   console.log("Didn't work!")
  //   // }
  // }

  // componentDidMount() {
  //   const username = this.state.posts.username
  //   if (localStorage.getItem(id)) {
  //       // If id exists, set the commments by that parsed array
  //       this.setState({comments: JSON.parse(localStorage.getItem(id))})
  //   } else {
  //       // call setComments() 
  //       this.setComments();
  //   }
  // }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })
  }

  filterComments = event => {
    event.preventDefault();
    this.setState({
      filterInput: event.target.value,
      posts: this.state.posts.filter(
        e => e.username.includes(this.state.filterInput)
      )
    })
  }

  render() {
    console.log("this.state.posts.username", this.state.posts[0].username)
    return (
      <div className="App">

        {/* <SimpleStorage parent={this} /> */}
        {/* <div>
          
          {/* <Authenticate App LoginPage={this.LoginPage} />
          <SearchBar 
          filterComments={this.filterComments}
          filterInput={this.state.filterInput}
          />
        </div> */}
          {/* <Authenticate App LoginPage={this.LoginPage} /> */}
        <div>
          <PostsPage 
            posts={this.state.posts}
            filterComments={this.filterComments}
            filterInput={this.state.filterInput}
          /> 
        </div>
      </div>
    );
  }
}



export default Authenticate(App);

