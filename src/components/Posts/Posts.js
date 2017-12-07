import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";
import "./Posts.css";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  findPost = (query) => {
    if (query === "") {
      this.resetData();
    } else {
      const newData = this.state.data.filter((post, index) => {
        if (post.username.includes(query + '')) console.log('post: ', post);
        return post.username.includes(query + '');
      });
      this.setState({
        data: newData
      });
    }
  }

  resetData () {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="Posts">
        <SearchBar onSearch={this.findPost} />
        {this.state.data.map((post, index) => {
          return <PostContainer key={index} post={post} />;
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Posts;
