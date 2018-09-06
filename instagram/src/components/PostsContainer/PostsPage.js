import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostsContainer from '../PostsContainer/PostsContainer'
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  logOutClickHandler = (event) => {
    localStorage.removeItem('username'); 
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.handleInput} logOutClick = {this.logOutClickHandler} />
        <PostsContainer posts={this.state.posts} searchTerm={this.state.search} />
      </div>
    );
  }
}

export default PostsPage;