import React, { Component } from "react";
import PostContainer from "./Components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: "Dan",
      searchValue: "",
      filteredData: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      filteredData: Array.from(dummyData)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("CDU");
      this.setState({
        filteredData: Array.from(this.state.data)
      });
    }
  }

  changeHandler = e => {
    this.setState({
      filteredData: this.state.data.filter(d =>
        d.username.includes(e.target.value)
      ),
      [e.target.name]: e.target.value
    });
  };

  addComment = (text, id) => {
    const newComment = {
      username: this.state.user,
      text: text
    };

    const newCommentArray = this.state.data.map(d => {
      if (d.id === id) {
        newComment.id = `${d.comments.length + 1}`;
        console.log(newComment);
        return { ...d, comments: [...d.comments, newComment] };
      } else {
        return d;
      }
    });

    // Make a comment about how fitteredData was not reconciled
    this.setState({
      data: newCommentArray
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          change={this.changeHandler}
          searchValue={this.state.searchValue}
        />
        {this.state.filteredData.map(post => (
          <PostContainer
            change={this.changeHandler}
            key={post.id}
            data={post}
            addComment={this.addComment}
            commentValue={this.state.commentValue}
          />
        ))}
      </div>
    );
  }
}

export default App;
