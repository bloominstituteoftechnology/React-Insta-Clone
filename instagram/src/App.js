import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostWindow from './components/PostContainer/PostWindow';
import Authentication from './Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      authentication: Authentication
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  render() {
    return (
      <PostWindow dummyData={this.state.dummyData} authenticate={this.state.authenticate}  />
      // <div className="App">
      //   <SearchBar />
       
      //   <div className="App-content">
      //     {this.state.dummyData.map(post => (
      //       <PostContainer key={post.timestamp} dummyData={post} />
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default App;