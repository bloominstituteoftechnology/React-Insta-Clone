import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';




class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchInputHandler = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    let searchValue = this.state.searchValue

    if (this.state.searchValue === ''){
      this.setState({
        data: dummyData 
      })
    } else {
      this.setState({
        data: this.state.data.filter(post => post.username.includes(searchValue))
    })
  }

  }
  
  render() {

    return (
      <div className="App">
        <SearchBar 
          searchValue={this.state.value} 
          searchInputHandler={this.searchInputHandler} 
          searchSubmitHandler={this.searchSubmitHandler} 
          />

        <div className="posts">
          {this.state.data.map(user => {
            return (
              <div>
              <PostContainer
                key={user.timestamp}
                username={user.username}
                icon={user.thumbnailUrl}
                image={user.imageUrl}
                likes={user.likes}
                timestamp={user.timestamp}
                comments={user.comments}
                inputHandler={this.inputHandler}
                submitHandler={this.submitHandler}
                  />
                </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default PostsPage;
