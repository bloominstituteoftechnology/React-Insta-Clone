import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar';
// import PropTypes from 'prop-types';
import PostsPage from './components/PostContainer/PostsPage';



class App extends Component {
  constructor() {
    super();
     
        this.state = {
          // dataSet: dummyData
        }
  }


  





render() {
  return (
    <div className="App">
    <PostsPage />
    
    
    </div>
  )
}
}// end curly





export default App;
