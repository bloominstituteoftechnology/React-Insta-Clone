import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage"
import Authenticate from "./components/Authenticate/Authenticate"


const App = Authenticate(
  class App extends Component {

    render() {


      return (
        <>
          <PostPage />

        </>
      );
    }
  }
);

export default App;
