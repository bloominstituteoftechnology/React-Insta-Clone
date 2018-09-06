import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostsPage forceUpd={this.props.forceUpd} username={this.props.username}/>
        
      </div>
    );
  }
}

const App2 = Authenticate(App);

export default App2;
