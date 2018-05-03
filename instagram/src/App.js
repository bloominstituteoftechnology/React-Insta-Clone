import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor() {
    super();

    this.state = {
      grams: [],
      comment: "",
      search: ""
    }
  }

  gramSearch(e) {
    let grams = dummyData;
    let queryItems = e.target.value;
    let tempArray = this.state.grams.slice();
      queryItems = queryItems.trim();
      tempArray = tempArray.filter((item) => item.username.includes(queryItems));
    if(queryItems === "") {
      this.setState({
     
      })
    } else {
      this.setState({
        grams: tempArray,
        search: queryItems
      });
    }
  }

  gramAddComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  gramSubmitComment(index) {
    let newComment = this.state.comment;
    let tempArray = this.state.grams.slice();
    let commentObj = {
      username: "Wonder Boy",
      text: newComment
    };

    tempArray[index].comments.push(commentObj);

    this.setState({grams: tempArray, comment: ""})
  }

  gramLike(index) {
    let tempArray = this.state.grams.slice();
    tempArray[index].likes ++;
    this.setState({
      grams: tempArray
    })
  }

  componentDidMount() {
    let allgrams = dummyData.slice();
    this.setState({
      grams: allgrams
    });
  }

  render() {
    return (
      <div className="App">
        <div className="fixed-top">
          <SearchBar
            search={this.gramSearch.bind(this)}
          />
        </div>
        <div className="container main-content">
          <PostContainer
            pressLike={this.gramLike.bind(this)}
            postComment={this.gramSubmitComment.bind(this)}
            grams={this.state.grams}
            commentInput={this.state.comment}
            addComment={this.gramAddComment.bind(this)}
            />
         </div>
      </div>
    );
  }
}

export default App;