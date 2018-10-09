import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostContainer from "./PostContainer/PostContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: dummyData
    };
  }
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({data:dummyData})
  //   },2000)
  // }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        {this.state.data.map(post => {
          return <PostContainer data={post} />;
        })}
      </div>
    );
  }
}

export default App;
