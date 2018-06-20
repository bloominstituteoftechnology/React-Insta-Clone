import React, {Component} from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import './PostContainer.css';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
      placeholderUsername: 'lambdaschool',
      searchData: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    const searchDummyData = dummyData.slice();
    searchDummyData.forEach((post, index) => post.originalIndex = index);
    this.setState({instagramData: dummyData, searchData: searchDummyData});
  }

  addNewComment = (event, comment, index) => {
    event.preventDefault();
    const newData = this.state.instagramData.slice();
    newData[index].comments.push({username: this.state.placeholderUsername, text: comment});
    this.updateData(newData);
  }

  addLike = (event, index) => {
    event.preventDefault();
    const newData = this.state.instagramData.slice();
    newData[index].likes++;
    this.updateData(newData);
  }

  onSearchPosts = (event, term) => {
    event.preventDefault();
    this.searchPosts(term);
  }

  searchPosts = term => {
    let newData = this.state.instagramData.slice();
    if (term.trim() !== '') {
      newData = newData.filter((element) => element.username.includes(term));
    }
    this.setState({searchData: newData, searchTerm: term});
  }

  updateData = (data) => {
    this.setState({instagramData: data});
    this.searchPosts(this.state.searchTerm);
  }

  render() {
    return (
      <div className="posts-page">
        <SearchBar onSearchPosts={this.onSearchPosts} />
        <PostContainer searchData={this.state.searchData} addNewComment={this.addNewComment} addLike={this.addLike} />
      </div>
    );
  }
}

export default PostsPage;