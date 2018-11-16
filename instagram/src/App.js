import React from 'react';
import PostPage from './components/PostPage';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <PostPage logout={this.props.logout} userName={this.props.userName} />
  }
}

export default Authenticate(App);
