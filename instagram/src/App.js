import React, { Component } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import { dummyData } from "./dummy-data.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    console.log(dummyData);
    this.setState({ data: dummyData });
    console.log("CDM Check", this.state.data);
  }
  render() {
    console.log("Render Check", this.state.data);
    return (
      <div className="App">
        {this.state.data.map((post, i) => {
          return <PostContainer key={i} data={post} />;
        })}

        <SearchBar data={this.state.data} />
      </div>
    );
  }
}

export default App;
