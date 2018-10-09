import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './Components/PostContainer';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      likes: 370
     
    }
  }

  componentDidMount() {
    setTimeout(() => {this.setState({data: dummyData})}, 2000)
  }
  increment = (prevState) => {
    this.setState(prevState => ({likes: prevState.likes + 1}))

  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} likes={this.state.likes} increment={this.increment}/>
      </div>
    );
  }
}

export default App;

// work on header, format CSS, look over current code and make things easier to read if possible.
