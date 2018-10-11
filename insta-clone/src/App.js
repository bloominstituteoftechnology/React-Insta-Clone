import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage"
import Authenticate from "./components/Authenticate/Authenticate"


const App = (
  class App extends Component {
    // constructor() {
    //   super()
    //   this.state = {
    //     username: '',
    //   }
    // }


    render() {


      return (
        <>

          <PostPage />

        </>
      );
    }
  }
);

export default Authenticate(App);
