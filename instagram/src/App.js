import React, { Component } from "react";
import Authenticate from './components/Authenticate/Authenticate'
import PostsPage from "./components/PostsPage";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="App">
            <PostsPage username={this.props.username} />
    </div>);
  }
}

const AppWithAuthentication = Authenticate(App);

// export default AppWithAuthentication;
export default App;
