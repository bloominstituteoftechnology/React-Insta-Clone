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

    console.log(users);
    console.log(searchedUserResult);
    console.log(this.state.searched);

    // if (searchedUserResult.length > 0) {
    //   this.setState({users: searchedUserResult}, () => console.log(this.state.users));
    // } 

    if (searchedUserResult.length > 0) {
      this.setState({data: searchedUserResult},
        () => console.log(this.state.data)
      )
    } 
    
  }

  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.data} onSearch={this.onSearch} handleNewSearch={this.handleNewSearch} />
        {/* <SearchBar users={this.state.data.map(user => { return user.username })}/> */}
        <PostContainer data={this.state.data} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
