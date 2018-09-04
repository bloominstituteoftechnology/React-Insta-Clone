import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      inputText: ""
    };
  }


  
  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  addToDo = event => {
    event.preventDefault(); 
    if (this.state.inputText)
    this.setState({
     // dummyData: [ ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Insta Clone</h1>
        </header>
       <div>
        {this.state.dummyData.map(post => <PostContainer post={post} inputText={this.state.inputText} handleInput={this.handleInput} />)}
        
       </div>
      </div>
    );
  }
}


export default App;
