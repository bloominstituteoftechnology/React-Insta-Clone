import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";

// import { library } from '../@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome'
// import { faInstagram, faCompass, faHeart, faUser } from './@fortawesome/free-solid-svg-icons'


//library.add(faInstagram, faComment);




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      likes: 1006,
      filteredPosts: [],
      filterTarget: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData })
    }, 500)
  }

  increment = prevState => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }))
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  filter = event => {
    this.handleInput(event);
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter( post => {
        return post.username.includes(prevState.filterTarget)
      });
     return { filteredPosts }
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
        />
        <PostContainer 
          dummyData={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          } 
          likes={this.state.likes}
          increment={this.increment}/>
      </div>
    );
  }
}

export default App;
