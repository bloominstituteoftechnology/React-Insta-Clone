import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData, //we can just pull the array of obj in like so
    };
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>
          <h1 className="instaCloneBanner">InstaClone</h1>
       </div>
        <PostContainer data={this.state.data} /> {/*here we are naming the component(Postcontainer) 
        and making the first key/value pair, data/{this.state.data} which will be wrapped in the 
        object we call props*/}
      </div>
    );
  }
}

export default App;
