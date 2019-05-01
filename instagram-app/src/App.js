import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PostContainer from "./Components/PostContainer/PostContainer";
import SearchBarContainer from "./Components/SearchBar/SearchBarContainer";

class App extends Component {
  state = {
    coolData: [],
    filteredData: []
  };

  componentDidMount() {
    this.setState({ coolData: dummyData });
  }


  searchPostsHandler = e => {
    var updatedData = this.state.initialItems;
    updatedData = updatedData.filter(function(item){
      return item.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredData: updatedData});
  };



  render() {
    return (
      <div className="App">
        <SearchBarContainer searchfn={this.searchPostsHandler} />
        {this.state.coolData.map(e => (
          <PostContainer Data={e} key={e.timestamp} />
        ))}
      </div>
    );
  }
}

export default App;

//
