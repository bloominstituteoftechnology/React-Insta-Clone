import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      dataInput: ''
    }
  }

  commentHandler = (e) => {
    console.log(e.target.value);
    this.setState({dataInput: e.target.value})
  }

  addComment = () => {
    let comment = {text: this.state.dataInput}
    let newData = this.state.data.comments.slice();
    newData.push(comment);
    this.setState({comments: newData, dataInput: ''});
  }

  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar />
        </header>
        
        <PostContainer data={this.state.data} dataInput={this.state.dataInput} commentHandler={this.commentHandler} addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
