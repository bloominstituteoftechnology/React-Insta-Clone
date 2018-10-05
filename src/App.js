import React, { Component } from 'react';
import './App.css';
import dummyData   from "./dummy-data";
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import Post from "./components/Posts/Post/Post";
import arraylooper from "./arrayLooper";


class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[dummyData]
    };
}

arrayloop(i){

}

  render() {
    return (

      <div className="App">
        <SearchbarContainer />

        <Post data={this.state.data[0]} comments={this.state.data[0][0].comments}/>
        
      </div>
    );
  }
}

export default App;
