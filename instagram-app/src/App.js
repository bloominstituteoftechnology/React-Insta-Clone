import React from 'react';
import PostPage from './components/PostSection/PostPage';
import './App.css';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFormWithAuthenticate = withAuthenticate(PostPage);


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  

  render() {
    return (

      <ComponentFormWithAuthenticate />
      
    );
  }
}

export default App;
