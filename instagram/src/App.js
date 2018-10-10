import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((item, idx) => 
          <PostContainer 
            item={item} 
            id={idx}
          />
        )}
      </div>
    );
  }
}

export default App;
