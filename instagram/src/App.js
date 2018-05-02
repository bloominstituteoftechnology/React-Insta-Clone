import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor(){
    super();
    this.state ={
      data: []
    }
  }
  componentDidMount(){
    this.setState( {data: dummyData} );
  }
  render() {
    // console.log(dummyData);
    // console.log(JSON.stringify(dummyData));
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {
          this.state.data.map( (userPosts, i) => (<PostContainer id={userPosts.username + i} key={userPosts.username + i} postData={userPosts} />) )
        }        
      </div>
    );
  }
}

export default App;
