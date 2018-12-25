import React, { Component } from 'react';

import './App.css';

import PostsPage from './Components/PostContainer/PostsPage';
class App extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  // when the component mounts  
  //I want to get the dummy data from the local storage
  componentDidMount(){
  }

  //only update local storage if the data has changed
  componentDidUpdate(){ 
  }


  render() {
    return (
      <div className="App">
       <PostsPage />
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display