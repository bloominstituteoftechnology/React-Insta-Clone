import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Authentication from "./components/Authentication/Authentication";

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
      <PostsPage
        data={this.state}
        filterChange={this.filterChangeHandler}
        filterClick={this.filterClickHandler}
      />
    );
  }
}

export default Authentication(App);
