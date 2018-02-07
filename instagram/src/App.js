//React and CSS imports
import React, { Component } from 'react';
import './App.css';

//Data being imported
import dummyData from "./dummy-data.js";

//Components being imported
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";


//App Component
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <PostContainer dummy={dummyData} />
        
      </div>
    );
  }
}

//export statement
export default App;


//https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg