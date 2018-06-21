import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInput: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  componentDidMount = () => {
    this.setState({
      data: dummyData,
      searchInput: '',
      newComment: ''
    });
  }

  login = (e) => {

  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchInput} onChange={this.changeHandler} />
        <PostsPage data={this.state.data}
          searchInput={this.state.searchInput} 
          username={this.props.username}/>
      </div>
    );
  }
}

export default Authenticate(App);
