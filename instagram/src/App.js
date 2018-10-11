import React, { Component } from "react";
import styled from 'styled-components'
//import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";

const WrapperDiv = styled.div` 
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //posts: dummyData
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

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  filter = event => {
    this.changeHandler(event);
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter( post => {
        return post.username.includes(prevState.filterTarget)
      });
     return { filteredPosts }
    })
  }

  render() {
    return (
      <WrapperDiv>
        <SearchBar 
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
        />
        <PostContainer 
          dummyData={ this.state.posts
            // this.state.filteredPosts.length > 0
            //   ? this.state.filteredPosts
            //   : this.state.posts
          } 
          likes={this.state.likes}
          increment={this.increment}/>
      </WrapperDiv>
    );
  }
}

export default App;
