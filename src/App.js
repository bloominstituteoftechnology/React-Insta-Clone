import React, { Component } from "react";
import "./App.css";
import Header from "./instagram/SearchBar/Header";
import Post from "./instagram/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  handleSearch = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let data = this.state.dummyData.filter(
      data => data.nickname.indexOf(this.state.search) !== -1
    );

    return (
      <div className="App">
        <Header input={this.state.search} handleSearch={this.handleSearch} />
        {data.map((data, i) => (
          <Post key={i} data={data} />
        ))}
      </div>
    );
  }
}
export default App;
