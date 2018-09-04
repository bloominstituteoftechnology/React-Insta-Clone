import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './PostContainer/PostContainer';
import PropTypes from 'prop-types';

dummyData.propTypes = {
  username: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.string)
}

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
      <header>
        <div class = 'header-bar'>
          <h1>Instagram</h1>
          <input type='search' placeholder = 'Search...'></input>
          </div>
        </header>

        <main>
          <div className = 'full-post'>
       
          {dummyData.map(data => (
            <PostContainer data={data} key={data.timestamp} />
          ))}
        </div>
      </main>

      </div>
    );
  }
}

export default App;
