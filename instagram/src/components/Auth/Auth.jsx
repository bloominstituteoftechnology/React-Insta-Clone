import React from 'react';
import App from '../../App';
import Login from '../Login/Login';

class Auth extends React.Component {
  constructor(App) {
    super();
    state = {
      authenticated: false
    }
  }

  // TODO: component did mount
  componentDidMount() {}; // TODO: add some conditional logic to deal with local storage

  render() { return <div>auth</div>; }; // TODO: add some conditional render logic for the return
};