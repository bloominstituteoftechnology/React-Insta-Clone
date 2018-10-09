import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { dummyData: [], search: "", searchList: [] };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData, searchList: dummyData });
  }

  filterChangeHandler = e => {
    this.setState({ search: e.target.value });
  };

  filterClickHandler = e => {
    e.preventDefault();
    const list = this.state.dummyData.filter(
      item => item.username === this.state.search
    );
    this.setState({ 
      searchList: list
    });
  };

  render() {
    if (this.state.dummyData === []) {
      return "Please wait...";
    }

    return (
      <div className="main-container">
        <SearchBar
          searchChange={this.filterChangeHandler}
          search={this.filterClickHandler}
          searchValue={this.state.search}
        />
        {this.state.search ? this.state.searchList.map(item => (
          <PostContainer key={item.timestamp} posts={item} />
        )) : this.state.dummyData.map(item => (
          <PostContainer key={item.timestamp} posts={item} />
        ))}
      </div>
    );
  }
}

export default App;
