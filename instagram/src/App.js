import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataInput: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }


  addNewComment = () => {
    let newComment = {text: this.state.dataInput, username: 'user'};
    let newData = this.state.data.slice();
    let commentArr= newData.map(i => {
      return i.comments;
    })
    commentArr.push(newComment);
    newData.splice(5, 1, commentArr);
    this.setState({data: newData, dataInput: ''});
  }

  likePost = () => {
    console.log(this.state.data.likes);
    let likes = this.state.data.slice();
    likes = likes.likes;
    console.log(likes);
    this.setState({likes: likes});
  }

  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar />
        </header>
        
        <PostContainer data={this.state.data} dataInput={this.state.dataInput} addComment={this.addNewComment} likePost={this.likePost}/>
      </div>
    );
  }
}

export default App;
