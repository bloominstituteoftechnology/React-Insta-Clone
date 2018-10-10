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

  //tracks user input search bar
  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  //filter post based on post username entered
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
              increment={this.increment}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;