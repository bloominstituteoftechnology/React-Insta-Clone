import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Posts from "./components/PostContainer/Posts";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ""
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  incrementLikes = index => {
    let data = this.state.data;
    data[index].likes = data[index].likes + 1;
    this.setState({ data });
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  searchPost = () => {
    return this.state.data
      .filter(data => data.username.includes(this.state.searchText))
      .map((data, index) => (
        <Posts
          postdata={data}
          key={index}
          index={index}
          incrementLikes={this.incrementLikes}
        />
      ));
    console.log(this.state.searchText);
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          searchText={this.searchPost}
        />
        {this.searchPost()}
      </div>
    );
  }
}

export default App;
