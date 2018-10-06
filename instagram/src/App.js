import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';




class App extends Component {
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
    console.log(this.state.searchValue)
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    let searchValue = this.state.searchValue
    this.setState({
      data: this.state.data.filter(post => post.username === searchValue)
    })
    
    // this.state.data.map(post => {
    //   if (searchValue === post.username) {
        
    //   } else {
    //     this.setState({
    //       data: this.state.data
    //     })
    //   }
    // })

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

export default App;
