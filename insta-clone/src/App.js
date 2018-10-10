import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage"
import Authenticate from "./components/Authenticate/Authenticate"


const App = Authenticate(
  class App extends Component {
    constructor() {
      super()
      this.state = {
        username: '',
      }
    }
    componentDidMount = () => {
      const user = localStorage.getItem('username')
      this.setState({ username: user })

   }

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
