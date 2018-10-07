import React, { Component } from "react";
// import logo from './D2rdroid1.png';
import logo from "./d2rdDroidEmoji.png";
import "./App.css";
import data from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaClonePosts: [],
    };
    
  }
  componentDidMount() {
    this.setState({ instaClonePosts: data });
  }
  
  /* DATA MODEL
{
    username: "philzcoffee",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        username: "philzcoffee",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        username: "biancasaurus",
        text: "Looks delicious!"
      },
      {
        username: "martinseludo",
        text: "Can't wait to try it!"
      }
    ]
  },
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
   <SearchBar />

        </header>
        <div>
          {this.state.instaClonePosts.map((post, i) => {
            return (
              <PostContainer
            {...post} // spread operator `...` passes all elements in the `post` to `PostContainer`
              />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
