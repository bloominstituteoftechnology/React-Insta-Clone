import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: '',
      newComment: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  componentDidMount = () => {
    this.setState({
      data:dummyData,
      searchInput: '',
      newComment: ''
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchInput} onChange={this.changeHandler}/>
        {this.state.data.map((user,index) => {
          if (!user.username.toLowerCase().includes(this.state.searchInput.toLowerCase())){
            return;
          }
          return <PostContainer onChangeHandler={this.changeHandler} key={`user${index}`} userData = {user} />
        })}
      </div>
    );
  }
}

export default App;
