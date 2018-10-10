import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import dummyData from "../dummy-data";
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
      <div className="App">
        <SearchBarContainer />
        {this.state.data.map(post => {
          return <PostContainer data={post} />;
        })}
      </div>
    );
  }
}

export default PostPage;
