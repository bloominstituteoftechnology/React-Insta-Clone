import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';

document.body.classList.add('background-snow');

class App extends React.Component {
  constructor() {
    super();
    this.state= { 

    };
  }


  render() {
    return (
      <div className="App">
      
      <PostPage />

      </div>
    );
  }
}


export default Authenticate(App);
