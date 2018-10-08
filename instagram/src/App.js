import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Create "igContainer" which contains the "searchBar" and "postContainer".
//searchBar will be a single input element with the ability to search posts,
//postContainer will be a card containing information from dummy data,
//the header and navigation bar will be built as part of "App",
//the search bar will be nested into the header/navbar, the post cards will not.

class App extends Component {
  
  state = {

  }

  inputFunction = (event) => {
    this.setState({[event.target.name]: event.target.value});//store input in temporary space.
  }
  render() {
    return (
      <div className="App">
        <div className="igContainer">
            <div className="ig_header">
              <img id="ig_logo" alt="instagramlogo" src="./assets/ig_search_bar"/>
              {/* <searchBar/> */}
            </div>

            <div className="ig_posts">

            {/* {this.state.igPosts.map(posts => <postContainer postObject={posts}/>)} */}
            
            <footer>
            </footer>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
