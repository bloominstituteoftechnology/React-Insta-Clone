import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Search from "./Components/SearchBar/search";
//import Post from "./Components/PostContainer/post";
import PostPage from "./Components/PostContainer/postpage";
import Authenticate from "./Components/Authentication/authenticate"
import Login from './Components/Login/login';
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 62.5%;
`
const PostContainer = styled.div.attrs({
  display: props => props.display,
})`
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 924px; */
  max-width: 604px;
  width: 100%;
`
//App renders the header for IG
//Also renders post component to the screen via mapping the state
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
      instagram: [],
    }
  }
  //fetches and sets state
  //pretend API call takes half a second to render
  componentDidMount() {
    setTimeout(() => {
      this.setState({instagram: dummyData});
    }, 500)
  }

  //tracks user input search bar
  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  //filter post based on post username entered
  filterPost = (searchText) => {
    this.setState({
      input: "",
      instagram: dummyData,
    })
    let matchFound = false;
    let postDisplay = []
    this.setState(prevState => {
      return {
        input: "",
        instgram: prevState.instagram.filter((post, index) => {
          if(post.username.includes(searchText)){
            postDisplay.push(post)
            matchFound = true;
          }
          if((matchFound === false && index === this.state.instagram.length-1) 
          || (searchText === "" && index === this.state.instagram.length-1)) {
            alert("No Matches Found")
            return 0;
          }
          if(postDisplay.length > 0) {
            this.setState({
                input: "",
                instagram: postDisplay,
            })
          }
          return 0;
        })
      }
    })
  }
  //old filter
    // let instaDisplay = document.querySelectorAll(".post-container")
    // instaDisplay[index].classList.add("hidden");
    // if((index === this.state.instagram.length-1) && (matchFound === false)) {
    //   for(let i=0; i < this.state.instagram.length; i++) {
    //     instaDisplay[i].classList.remove("hidden");
    //   }
    //   alert("No Matches Found")
    //   return 0;
    // }
    // if(post.username.includes(searchText)) {
    //   instaDisplay[index].classList.remove("hidden");
    //   matchFound = true;
    // }
    // return post;

  render() {
    return (
      <AppContainer>
        <Search
          insta={this.state.instagram}
          text={this.state.input}
          input={this.handleInput}
          search={this.filterPost}
        />
        {this.state.instagram.map(data => (
          <PostContainer display="flex" className="post-container" key={data.username}>
            <PostPage 
              post={data}
              text={this.state.input}
              increment={this.increment}
            />
          </PostContainer>
        ))}
      </AppContainer>
    );
  }
}

export default Authenticate(App, Login);