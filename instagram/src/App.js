import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import authRequired from './auth/authRequired';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
    };
  };

  componentDidMount() {
    setTimeout(() => this.setState({posts: dummyData}), 2000);
  }

  filteredPosts = () => {
    return this.state.posts.filter(post => post.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <SearchBar 
          searchPost={this.changeHandler}
          value={this.state.search}
          logout={this.props.logout}
        />
        <PostContainer posts={this.filteredPosts()}/>
      </div>
    );
  }
}

export default authRequired(App);
