import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Search from "./Components/SearchBar/search";
import Post from "./Components/PostContainer/post";

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

  //tracks user input for the comment section and search bar
  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  /*adds comment to any post
  if the username of the current post matches the comment box we are adding the comment to, the new comment is pushed as an addition to the comment section. Otherwise the orginal post is returned
  */
  addComment = (postID) => {
    //event.preventDefault()
    let data = {
      username: "hotdamnirock",
      text: this.state.input,
    }
    this.setState({
      input: "",
      instagram: this.state.instagram.map(post => {
        if(postID === post.username){
          post.comments.push(data)
        }
        return post
      })
    })
  }

  /*increases likes for heart click
  if the username on the current post matches the username of the heart we are clicking the number of likes increases
  */
  increment = (postID) => {
    this.setState({
      instagram: this.state.instagram.map(post => {
        if(postID === post.username){
          ++post.likes
        }
        return post
      })
    })
  }

  //filter post based on post username
  filterPost = (searchText) => {
    let instaDisplay = document.querySelectorAll(".post-container")
    let matchFound = false;
    this.setState({
      input: "",
      instgram: this.state.instagram.filter((post, index) => {
        instaDisplay[index].classList.add("hidden");
        if((index === this.state.instagram.length-1) && (matchFound === false)) {
          for(let i=0; i < this.state.instagram.length; i++) {
            instaDisplay[i].classList.remove("hidden");
          }
          alert("No Matches Found")
          return 0;
        }
        if(post.username.includes(searchText)) {
          instaDisplay[index].classList.remove("hidden");
          matchFound = true;
        }
        return post;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Search
          insta={this.state.instagram}
          text={this.state.input}
          input={this.handleInput}
          search={this.filterPost}
        />
        {this.state.instagram.map(data => (
          <div className="post-container" key={data.username}>
            <Post 
              post={data}
              text={this.state.input}
              input={this.handleInput}
              add={this.addComment}
              increment={this.increment}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;