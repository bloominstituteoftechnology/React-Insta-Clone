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

  //set data to dummyData
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  //set searchValue in state to what the user types into search bar
  searchInputHandler = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })
  }

  //grab the value of searchValue and filter the data to only show matches (needs to work better)
  //includes() probably isnt what i should be using.  will circle back around at the end if i have time
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
      <div>
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
