import React from "react";
import "./App.css";

import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from './components/Authentication/withAuthenticate'; 

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage); 

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;

