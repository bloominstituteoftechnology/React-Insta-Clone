import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchInput: ""
    }

  }

  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  changeHandler = event => {
    this.setState({[event.target.name] : event.target.value});
  }

  searchResults = event =>{
    event.preventDefault();
    this.setState({
      data: this.state.data.filter(item => item.username === this.state.searchInput ? item : null),
     searchInput: ""
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
        <SearchBar usrData={this.state.data} changeHandler={this.changeHandler} searchResults={this.searchResults} />
        {this.state.data.map((user, index) => <PostContainer usrData={user} idx={index} key={index} />)}
        </div>
      </div>
    );
  }
}

export default App;
