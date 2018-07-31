import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
// import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        {/* <SearchBar /> */}
        <PostContainer />
        {this.state.dummydata.map(post => <PostContainer key={this.timestamp} values={post} />)} />
      </div>
    );
  }
}
export default App;
