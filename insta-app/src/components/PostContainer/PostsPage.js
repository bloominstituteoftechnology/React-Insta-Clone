import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import styled from "styled-components"; 

const Background = styled.div`
background: lightgrey; 
`
const AppContainer = styled.div`
width: 500px; 
height: auto; 
margin: auto; 
background: white;
`

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        names: ""
      };
    }
    componentDidMount(){
      this.setState({data: dummyData}); 
    }
    render() {
      return (
          <Background>
           <SearchBar />
          <AppContainer>
          <PostContainer 
          handleLikeBtn = {this.likeBtn}
          posts={this.state.data} />
        </AppContainer>
        </Background>
      );
    }
  }
  export default PostsPage; 