import React, { Component } from 'react';
import PostContainer from '../PostContainer/postcontainer';
import SearchBar from '../SearchBar/searchbar';
import dummyData from '../../dummy-data';


class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchQuery: ''
    };
  };

  componentDidMount() {
    this.setState({data: dummyData})
  };

  logOut = () =>{
    localStorage.removeItem('user');
    this.props.onLogout();
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  };

  searchPostsHandler = event => {
    event.preventDefault();
    const posts = this.state.data.filter((item) => {
      if(item.username === event.target.value) 
        return posts;
    });
    this.setState({data: posts})
  };

  render() {
    const userSearch = this.state.data.filter((data) => {
    return data.username.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1   
    })
    return (
      <div className="App">
        <SearchBar 
          searchPosts={this.searchPostsHandler} 
          onChange={this.handleSearchChange}
          logOut={this.logOut}
        />
        {userSearch.map(item =>  <PostContainer data={item} key={item.timestamp}/>)}
      </div>
    );
  }
}
 
export default PostPage;