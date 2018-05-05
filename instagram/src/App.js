import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor() {
    super();

    this.state = {
      tweets: [],
      comment: "",
      search: ""
    }
  }

  handleKeyUp(e) {
    let tweets = dummyData;
    let tempArray = this.state.tweets.slice();
    let queryItems = e.target.value;
    queryItems = queryItems.replace(/ /, "");
    if(e.keyCode === 8) {
      if(queryItems.length > 0) {
        tempArray = tweets.filter((item) => item.username.includes(queryItems));
        this.setState({
          tweets: tempArray
        });
      }
    }
  }

  handleSearch(e) {
    let tweets = dummyData;
    let queryItems = e.target.value;
    let tempArray = this.state.tweets.slice();
      queryItems = queryItems.replace(/ /, "");
      tempArray = tempArray.filter((item) => item.username.includes(queryItems));
    if(queryItems === "") {
      this.setState({
        tweets: tweets
      })
    } else {
      this.setState({
        tweets: tempArray,
        search: queryItems
      });
    }
  }

  handleAddComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmitComment(index) {
    let newComment = this.state.comment;
    let tempArray = this.state.tweets.slice();
    let commentObj = {
      username: "Wonder Boy",
      text: newComment
    };

    tempArray[index].comments.push(commentObj);

    this.setState({tweets: tempArray, comment: ""})
  }

  handleLike(index) {
    let tempArray = this.state.tweets.slice();
    tempArray[index].likes ++;
    this.setState({
      tweets: tempArray
    })
  }

  componentDidMount() {
    let allTweets = dummyData.slice();
    this.setState({
      tweets: allTweets
    });
  }

  render() {
    return (
      <div className="App">
        <div className="fixed-top">
          <SearchBar
            search={this.handleSearch.bind(this)}
            keyUp={this.handleKeyUp.bind(this)}
          />
        </div>
        <div className="container main-content">
          <PostContainer
            pressLike={this.handleLike.bind(this)}
            postComment={this.handleSubmitComment.bind(this)}
            tweets={this.state.tweets}
            commentInput={this.state.comment}
            addComment={this.handleAddComment.bind(this)}
            />
         </div>
      </div>
    );
  }
}

export default App;
