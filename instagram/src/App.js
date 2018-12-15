import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      searchInput: '',
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData,
    })
  }

  searchHandler = event => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput)
  };


  render() {
    return (
      <div className="App">
        <SearchBar searchHandler ={this.searchHandler}/>
        <PostContainer  posts={this.state.post} user={this.props.user}/>
      </div>
    );
  }
}


export default App;




