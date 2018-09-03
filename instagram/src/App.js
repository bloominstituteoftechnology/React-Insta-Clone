import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    
    /*The root App component of your application should 
    import the dummy data from the dummy-data.js file with import 
    dummyData from './dummy-data'; and iterate over said data, 
    passing each individual object as a prop to an instance of PostContainer.
    */


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {dummyData.map(data => (
        <PostContainer data={data} key={data.timestamp} />
      ))}

      </div>
    );
  }
}

export default App;
