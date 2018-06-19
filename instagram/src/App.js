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
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }


  addNewComment = (event, index) => {
    event.preventDefault;
    let newComment = {text: event.target.value, username: 'user'};
    let newData = this.state.data.slice();
    let commentArr = newData[index].comments;
    commentArr.push(newComment);
    this.setState({data: newData});
  }

  likePost = () => {
    let newData = this.state.data.slice();
    newData[0].likes += 1;
    this.setState({data: newData});
  }

  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar />
        </header>
        
        <PostContainer data={this.state.data} dataInput={this.state.dataInput}  addComment={this.addNewComment} likePost={this.likePost}/>
      </div>
    );
  }
}

export default App;
