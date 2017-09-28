import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { PostContainer } from './PostContainer';
import { postData } from './application-data';

class App extends Component {
  // add constructor
  constructor() {
    // inherits all of component methods and attributes
    super();
    // main data in the app is the People data, which we display
    this.state = {
      PostData: []
    }
  }

  // once the app component add loads (mounts), set the people to the imported people.js
  // this is where you instantiate the components data
  componentDidMount() {
    this.setState({PostData: postData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
        {/* iterate thru posts and create a PostContainer component for each */}
        {this.state.PostData.map((post => {
          return(
            <PostContainer postData={post} />
          )
        }))}
        </div>
      </div>
    );
  }
}

export default App;
