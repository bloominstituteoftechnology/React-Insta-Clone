import React from "react";
import PostsPage from "./components/PostsContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

// Need to invoke Authenticate page and passing in App as the component
export default Authenticate(App);
