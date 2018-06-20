import React from 'react';
import uuid from 'uuid/v1';
import '../../App.css';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  addNewComment = (index, comment) => {
    let newComment = { username: 'Thomas', text: comment };
    let newState = this.state.dummyData.slice();
    newState.forEach((post, i) => {
      if (i === index) {
        post.comments.push(newComment);
      }
    });
    this.setState({ dummyData: newState });
  };

  toggleLike = index => {
    let newState = this.state.dummyData.slice();
    newState.forEach((post, i) => {
      if (i === index) {
        post.likes++;
      }
    });
    this.setState({ dummyData: newState });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((d, i) => {
          return (
            <PostContainer
              key={uuid()}
              data={d}
              addCommentHandler={this.addNewComment}
              toggleLikeHandler={this.toggleLike}
              postId={i}
            />
          );
        })}
      </div>
    );
  }
}

export default PostsPage;
