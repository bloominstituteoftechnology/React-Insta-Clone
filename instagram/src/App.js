import React, { Component } from 'react';
import SearchBar from '../src/Components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      likes: 370
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts: dummyData});
    }, 450);
  }
  increment = prevState => {
    this.setState(prevState => ({likes: prevState.likes + 1}));
  }
  handleInput = event => {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (
      <div className='app-wrap'>
        <SearchBar />
        <PostContainer likes={this.state.likes} 
        increment={this.increment} />
      </div>
    );
  }
}

export default App;
