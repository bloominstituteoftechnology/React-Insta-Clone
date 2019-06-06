import React from "react";
import PropTypes from "prop-types";
import Post from "./postList";
import DATA from "../../dummy-data.js";
export default class postContainer extends React.Component {
  postHandler = () => {
    if (DATA) {
      return DATA.map(post => {
        return <Post key={post.id} data={post} filter={this.props.filter} />;
      });
    }
  };

  render() {
    return <div>{this.postHandler()}</div>;
  }
}
