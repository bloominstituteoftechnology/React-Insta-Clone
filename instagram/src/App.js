import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }


  render() {
    
    /*The root App component of your application should 
    import the dummy data from the dummy-data.js file with import 
    dummyData from './dummy-data'; and iterate over said data, 
    passing each individual object as a prop to an instance of PostContainer.
    */

    return (
      <PostsPage />
    );
  }
}

export default App;
