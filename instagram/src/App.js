import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      likes: [],
      filter: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      comments: dummyData.comments,
      likes: dummyData.likes
    });

  }



  handleInputChange = event => {
    this.setState({
      filter: event.target.value
    });
  };

  filterItems = event => {
    event.preventDefault();
    if(this.state.filter === ""){
      return this.setState({
        data: dummyData
      });
    }
    let filtered = this.state.data.filter(item => {
      return item.username === this.state.filter;
    });
    this.setState({
      data: filtered
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          handleInputChange={this.handleInputChange}
          filterItems={this.filterItems}
          filter={this.state.filter}
        />
        <PostContainer
          data={this.state.data}
          comments={this.state.comments}
          likes={this.state.likes}
        />
      </div>
    );
  }
}

export default App;
