import React, { Component } from 'react';

// styles
import './App.css';

// components
import PostPage from './components/PostContainer/PostPage';

class App extends Component {

  handleLogin(name, password) {
    if (password === 'lambda') {
      localStorage.setItem('instaCloneLogin', JSON.stringify({
        username: name
      }))
      window.location.reload()
    }
  }

  render() {
    return (
      <div className="App">
        <PostPage
          handleLogin={(name, password) => this.handleLogin(name, password)}
        />
      </div>
    );
  }
}

export default App;