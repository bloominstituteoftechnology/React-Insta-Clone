import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
        {/* {postData.map((data, i) => {
          return <PostContainer postData={data} />
        })} */}
        {/* <PostContainer postData={postData} /> // Map is the preferred way! Put mapping into component tho?*/}
      </div>
    )

    // // Default create-react-app return
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
