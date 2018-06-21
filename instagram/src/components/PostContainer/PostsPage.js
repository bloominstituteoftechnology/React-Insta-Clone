import React from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      displayData: [],
    };
  }

  componentDidMount() {
    this.setState({ dummyData, displayData: dummyData });
  }

  addNewComment = (index, comment) => {
    let username = localStorage.getItem('user');
    let newComment = { username, text: comment };
    let newState = this.state.dummyData.slice();
    newState.forEach((post, i) => {
      if (i === index) {
        post.comments.push(newComment);
      }
    });
    this.setState({ dummyData: newState });
  };

  toggleLike = (index, val) => {
    let newState = this.state.dummyData.slice();
    newState.forEach((post, i) => {
      if (i === index) {
        post.likes += val;
      }
    });
    this.setState({ dummyData: newState });
  };

  handleSearch = term => {
    this.setState({
      displayData: this.state.dummyData.filter(p => p.username.includes(term)),
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchHandler={this.handleSearch} />
        {this.state.displayData.map((d, i) => {
          return (
            <PostContainer
              key={i}
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
