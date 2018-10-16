import React, { Component } from 'react';
import './App.css';
import dummyData from './components/dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/searchBar.js';

//Create "igContainer" which contains the "searchBar" and "postContainer".
//searchBar will be a single input element with the ability to search posts,
//postContainer will be a card containing information from dummy data,
//the header and navigation bar will be built as part of "App",
//the search bar will be nested into the header/navbar, the post cards will not.

class App extends Component {
  
  state = {
    temp: "",
    igPosts: []
  }

  inputFunction = (event) => {
    this.setState({[event.target.name]: event.target.value});//store input in temporary space.
    // **create function to filter posts with .filter & includes()
  }
  
  componentDidMount() {
    this.setState ({igPosts: dummyData})
    }


  render() {
    return (
      <div className="App">
        <div className="igContainer">
            <div className="ig_header">
              <div className="logo">LOGO</div>
              <div className="searchBar">
                <SearchBar/>
              </div>
            </div>

            <div className="ig_posts">
            {/* map through dummydata, create new PostContainer for each object. */}
            {this.state.igPosts.map(posts => <PostContainer postObjectArray={posts}/>)}
            </div>
        </div>
      </div>
    );
  }
}

export default App;