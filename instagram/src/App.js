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
      count: 0,
      username: '',
    }
  }


componentDidMount() {
  setTimeout(() => {
    this.setState({ dummyData: dummyData })
  }, 2000)
}

addNewComment = event => {
  this.setState({
    dummyData: [
      ...this.state.dummyData,
      { 
        username: 'Conner',
        text: this.state.newComment
       }
    ],
    newComment: "",
  });
  event.preventDefault();
};

changeHandler = event => {
  event.preventDefault();
  this.setState({ [event.target.name]: event.target.value });
};

clickToIncrease = () => {
  this.setState({ count: this.state.count + 1 })
}




  render() {
    return (
      <div className="App">
        <SearchBar
        username={this.state.username}
        />
        <PostContainer 
        data={this.state.dummyData}
        newComment={this.addNewComment}
        changeHandler={this.changeHandler}
        newInput={this.state.newComment}
        count={this.state.count}
        increaseLike={this.clickToIncrease}
        />
      </div>
    );
  }
}

export default App;
