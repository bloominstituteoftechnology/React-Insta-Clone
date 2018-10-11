import React, { Component } from 'react';
import "./App.css";
import dummyData from "./dummy-data";
import PostPage from "./components/PostContainer/PostPage";
import Authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      holder:''
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  handleInput = e => {
    this.setState({
      holder: e.target.value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({
      dummydata: this.state.dummyData.filter(x => {
        return x.username.includes(this.state.holder);
      })
    });
  };

  render() {
    return (
      <div className="App">
        <PostPage
          dummyData={this.state.dummyData}
          handleInput={this.handleInput}
          handleSearch={this.handleSearch}
          holder={this.holder}
        />
      </div>
    );
  }
}

export default Authenticate(App);