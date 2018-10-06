import React, { Component } from 'react';
import './App.css';
import dummyData   from "./dummy-data";
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import Post from "./components/Posts/Post/Post";



var g = 0;
for(var i=0; i<dummyData.length; i++){
   g++;
}

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

        <Post data={this.state.data[0]} comments={this.state.data[0].map((instance, index) => {
          return(
            <div>
              <div>{this.state.data[0][0].comments}</div>
              <div>{this.state.data[0][1].comments}</div>
              <div>{this.state.data[0][2].comments}</div>
            </div>
          )
        })}/>
        
      </div>
    );
  }
}

export default App;
