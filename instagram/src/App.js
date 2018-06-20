import React, { Component } from 'react';
import dummyData from '../src/dummy-data.js';
// import Posts from './components/PostsContainer/posts';
// import SearchBar from './components/SearchBar/search';
import Postspage from './components/PostsContainer/postspage.js';
import './App.css';
import Authenticate from './Authentication/authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      authenticate:Authenticate
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }
  render() {
    return (
      <Postspage dummyData={this.state.dummyData} authenticate={this.state.authenticate} />
      
      // <div className="App">
      //   <header className="App-header">
          
      //     <div className="App-title"><SearchBar /></div>
      //   </header>
      //   <div className="primary">
      //     {this.state.dummyData.map(post => (
      //         <Posts key={post.timestamp} dummyData={post} />
      //     ))}
      //   </div>
        
      // </div>
    );
  }
}

export default App;
