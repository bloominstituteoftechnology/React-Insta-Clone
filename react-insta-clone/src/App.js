import React, {Component} from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer.js";
import Search from "./components/SearchBar/Search"
import CommentSection from "./components/CommentSection/CommentSection.js"

class App extends Component {
  render() {
    return (<div className="App">
      <Search/>
      <PostContainer dummyData={dummyData}/>
      {/* <CommentSection dummyData={dummyData}/> */}
    </div>);
  }
}

export default App;
