import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

/*The root App component of your application should import the dummy data from the dummy-data.js file with import dummyData from './dummy-data'; and iterate over said data, passing each individual object as a prop to an instance of PostContainer. 
needs to pass Posts the following: 
thumbnailUrl
imageUrl
likes
comments (the entire object)
timestamp
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: []
    } 
  }

  componentDidMount() {
    this.setState({
      instaData: dummyData
    })
  }

  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer posts = {this.state.instaData} />
        
      </div>
    );
  }
}

export default App;
