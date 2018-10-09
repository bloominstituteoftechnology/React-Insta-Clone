import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      newSearch: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 2000);
  }

  startSearch = event => {
    event.preventDefault();
    if (this.state.newSearch !== "") {
      let newData = this.state.dummyData;
      let filteredArr = newData.filter(
        post => post.username === this.state.newSearch
      );
      this.setState({
        dummyData: filteredArr,
        newSearch: ""
      });
    }
  };

  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.dummyData.length ? (
          <h2>Loading, please wait...</h2>
        ) : (
          <div>
            <SearchBar
              changeHandler={this.changeHandler}
              startSearch={this.startSearch}
              value={this.state.newSearch}
            />
            <div className="post-container-list">
              {this.state.dummyData.map(user => {
                return <PostContainer key={user.timestamp} userData={user} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
