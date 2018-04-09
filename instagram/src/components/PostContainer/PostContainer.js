import React, { Component } from 'react';
import Post from './Post';
import dummyData from '../../dummy-data';

class PostContainer extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    this.setState({ postData: dummyData });
  }

  render() {
    const { postData } = this.state;
    return <div>{postData.map(post => <Post post={post} />)}</div>;
  }
}

export default PostContainer;

// KF NOTES: We imported dummydata which that file consists of an array of objects. Each object corresponds with a post to Instagram (ex: username, thumbnailURL, imageURL, likes, timestamp, comments)
// State (line 6) is containing the data we have for our app which is pulling from the dummydata import at top.