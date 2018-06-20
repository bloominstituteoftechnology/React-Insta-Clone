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
      data: dummyData,
      dataInput: ''
    });
  }


  addNewComment = (event, index) => {
    event.preventDefault;
    let newComment = {text: event.target.value, username: 'user'};
    let newData = this.state.data.slice();
    newData[index].comments.push(newComment);
    this.setState({data: newData});
  }

  likePost = (i) => {
   
    let newData = this.state.data.slice();
    newData[i].likes += 1;
    this.setState({data: newData});
  }

  searchFunc = (event) => {
    const result = this.state.data.filter(object => 
      event.target.value === object.username);
      console.log(result);
    this.setState({data: result});
  }

  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar searchFunc={this.searchFunc} />
        </header>
        
        <PostContainer data={this.state.data} dataInput={this.state.dataInput}  addComment={this.addNewComment} likePost={this.likePost} />
      </div>
    );
  }
}

export default App;
