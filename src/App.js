import React, { Component } from 'react';
import './App.css';
import DummyData from './dummy-data';
//components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    console.log(DummyData);
    return (
      <div className="App">
      <SearchBar />

      {DummyData.map((user, i) => {
        return <PostContainer user={user} key={i}/>
      })}

      </div>
    );
  }
}


//itterate over dummy data pass each object as a prop to instance of PostContainer
//post container will pass array of comments on each post as a prop to comment sections
//comment section will render a comment component with username, there should also be a input box that allows submmission of new comments
//use proptypes to check the type of data



export default App;
