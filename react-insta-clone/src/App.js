import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchComponents/SearchBar";
import PostContainer from "./components/PostComponents/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: []
    }
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  componentDidMount() {
    this.setState({ dataSet: dummyData})
  }

  incrementLikes(url) {
    let data = this.state.dataSet.slice();
    data = data.map(post => {
      if (post.imageUrl === url){
        return post.likes++;
      }
    })
    this.setState({data});
  }

  addNewComment = e => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ text: this.state.comment, username: "anon" });
    this.setState({ comments, comment: "" });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
        dataSet = {this.state.dataSet}
        incrementLikes = {this.incrementLikes}
        />
      </div>
    );
  }
}

export default App;
