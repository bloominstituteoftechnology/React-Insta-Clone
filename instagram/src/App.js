import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData  from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
      users: [],
      searched: ""
    };
  }
  // I removed componentDidMount here because it was causing problems when I would change state.
  // componentDidMount() {
  //   this.setState({data: dummyData});
  // }

  handleNewSearch = (event) => {
    this.setState({searched: event.target.value});
  }

  onSearch = (event) => {
    event.preventDefault();
    const searchedUser = this.state.searched;
    const users = this.state.data.slice();
    const searchedUserResult = users.filter(user => user.username === searchedUser);

    if (searchedUserResult.length > 0) {
      this.setState(
        {
          data: searchedUserResult,
          searched: ""
        }
      )
    } else {
      alert ("No user by that name. Please try again.");
      this.setState({data: dummyData})
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.data} onSearch={this.onSearch} handleNewSearch={this.handleNewSearch} searched={this.state.searched}/>
        <PostContainer data={this.state.data} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
