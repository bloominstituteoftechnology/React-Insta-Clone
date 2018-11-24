import React, { Component } from "react";
import Authenticate from "./components/Authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import "./Style.css";

/***************************************************************************************************
 ********************************************* Component ********************************************
 ***************************************************************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage loginUsr={this.props.loginUsr} logout={this.props.logout} />
      </div>
    );
  }
}

export default Authenticate(App);
