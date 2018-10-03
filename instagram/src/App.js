import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Post from "./Components/PostContainer/post";

//App renders the post component to the screen via mapping the dummy data and passing it into a post component
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
    }
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value)
  }

  
  render() {
    return (
      <div className="App">
        {dummyData.map(data => (
          <div className="post-container" key={data.username}>
            <Post 
              post={data} 
              text={this.state.input}
              input={this.handleInput}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;