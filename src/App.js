import React, { Component } from "react";
import "./App.css";
import Header from "./instagram/PostContainer/Header";
import Post from "./instagram/PostContainer/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          <Post
            nickname="philzcoffee"
            avatar="https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
            image="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg"
          />

          {/* more posts */}
        </section>
      </div>
    );
  }
}

export default App;
