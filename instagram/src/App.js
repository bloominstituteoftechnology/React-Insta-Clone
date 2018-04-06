  import React, { Component } from 'react';
  import './App.css';
  import { dummyData } from './dummy-data.js';
  import { SearchBar } from './components/SearchBar/SearchBar';
  import { PostContainer } from './components/PostContainer/PostContainer';
  import { CommentSection } from './components/CommentSection/CommentSection';


  class App extends Component {
    constructor() {
      super();
      this.state = {
        dummyData: []
      };
    }

    componentWillMount() {
      this.setState({ dummyData: dummyData });
    }

    render() {
      return (
        <div className="App">
          <SearchBar />
          {/* <PostContainer  dummy={this.state.dummy} />
          <CommentSection /> */}
        </div>
      );
    }
  }

  export default App;

/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */