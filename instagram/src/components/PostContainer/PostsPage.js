import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comments: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData,
        comments: dummyData.map(data => data.comments)
      });
    }, 800);
  }

  // searchPostHandler = e => {
  //   const posts = this.state.posts.filter(p => {
  //     if (p.username.includes(e.target.value)){
  //       return p;
  //     }f
  //   })
  // }

  render() {
    // console.log(this.state.comments);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <PostContainer data={this.state.data} key={Math.random()} />
      </div>
    );
  }
}

export default PostsPage;
