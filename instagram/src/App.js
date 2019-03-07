import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import PostsPage from './Components/PostContainer/PostsPage';
import Authenticate from './Components/Authentication/Authenticate';


class App extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromAuthenticate />
      </div>
    );
  }
}

const ComponentFromAuthenticate = Authenticate(PostsPage)(Login);

export default App;