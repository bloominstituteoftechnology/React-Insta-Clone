import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';




class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
    };

  } //constructor ends

  componentDidMount() {
    console.log('CDM is running', this.state.posts);
    
    setTimeout(() => {
      this.setState({ posts : dummyData });
    }, 8000);
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <header>
            <SearchBar />
        </header>

        <div> 
            <PostContainer postPassedAhead = {this.state.posts}/>
        </div>
      </div>
    ); //return end
  } //render() end
} //App class component end.

export default App;
