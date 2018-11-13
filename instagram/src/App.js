import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
      newComment: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    })
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value,
    });
  };

  handleComment = ev => {
    this.setState({
      newComment: ev.target.value
    });
  };

  // addComment = ev => {
  //   ev.preventDefault();
  //   this.setState({
  //     toDoList: [...this.state.toDoList, {
  //         task: this.state.inputText,
  //         id: Date.now(),
  //         completed: false,
  //       }],
  //       inputText: ''
  //   })
  // }

  render() {
    return (
      <div className="App">
        <SearchBar 
          handleChange={this.handleSearch}
          searchText={this.state.searchText} 
        />
        <PostContainer postsData={this.state.data} />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default App;
