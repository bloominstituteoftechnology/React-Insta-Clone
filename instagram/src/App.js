import React, { Component } from 'react';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/postContainer.js'
import SearchBar from './components/SearchBar/searchBar.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData: [],
      newComment: '',
    }
  }

componentDidMount() {
  setTimeout(() => {
    this.setState({ dummyData: dummyData })
  }, 2000)
}

addNewComment = event => {
  event.preventDefault();
  this.setState({
    disneyData: [
      ...this.state.dummyData,
      { comment: this.state.newComment }
    ],
    newComment: ""
  });
};

changeHandler = event => {
  event.preventDefault();
  this.setState({ [event.target.name]: event.target.value });
};



  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        data={this.state.dummyData}
        newComment={this.addNewComment}
        changeHandler={this.changeHandler}
        newInput={this.state.newComment}
        />
      </div>
    );
  }
}

export default App;
