import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import dummyData from "../dummy-data";
import "./PostPage.css"
import styled from 'styled-components';
const PostPageDiv=styled.div`
  width:100%;
`;
class PostPage extends Component {
  constructor(props) {
    super();
    this.state = {
      data:[]
    };
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({data:dummyData})
    },2000)
  }
  render() {
    return (
      <PostPageDiv>
        <SearchBarContainer />
        {this.state.data.map(post => {
          return <PostContainer data={post} />;
        })}
      </PostPageDiv>
    );
  }
}

export default PostPage;
