import React, { Component } from 'react';
// import SearchBar from './SearchBar';
import PostContainer from './components/PostContainer.js'
import data from './components/data';
import './App.css';
// import SearchBar from './components/SearchBar.js';

class App extends Component {
  constructor () {
    super(); 
    this.state = {
   dummyData: []
  //  put data in state and set to var dummyData
  // 1.set up initial data in state obj
   };
  }

  componentDidMount = () => {
    this.setState ({dummyData: data})
  }
  // 2.then render (initial render first then fetch #3)
  // 3. run componentDidMount - fetch data from API
  render() {
    return (
      <div className="App">
      {/* running a forLoop on dummyData */}
      {/* mapping over data from state and putting into userPost
      userPost then set to var passPost inside PostContainer*/}
      {this.state.dummyData.map((userPost) => {
        return <PostContainer passPost={userPost}/>
        // userPost is the argument can be named anything but should
        // be relative to project
        // this argument become prop
        })}
        {/* <SearchBar />
        <PostContainer data={dummyData}/> */}
      </div>
    );
  }
}

export default App;
