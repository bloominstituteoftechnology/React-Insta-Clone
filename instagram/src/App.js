import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      newSearch: "",
      filtered: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ postData: dummyData });
    }, 2000);
  }

  // saveState() {
  //   for (let key in this.state) {
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  startSearch = event => {
    event.preventDefault();
    let newData = dummyData;
    let filteredArr = newData.filter(
      post => post.username === this.state.newSearch
    );
    if (filteredArr.length) {
      this.setState({
        postData: filteredArr,
        newSearch: "",
        filtered: true
      });
    } else if (this.state.filtered === true) {
      this.setState({
        postData: dummyData,
        newSearch: "",
        filtered: false
      });
    } else {
      alert("Sorry, but we couldn't find any matches with that username");
      this.setState({
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
        {!this.state.postData.length ? (
          <h2>Loading, please wait...</h2>
        ) : (
          <div>
            <SearchBar
              changeHandler={this.changeHandler}
              startSearch={this.startSearch}
              value={this.state.newSearch}
              filtered={this.state.filtered ? "filtered" : "not-filtered"}
            />
            <div className="post-container-list">
              {this.state.postData.map(user => {
                return (
                  <PostContainer
                    key={user.timestamp}
                    userData={user}
                    // saveState={this.saveState}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
