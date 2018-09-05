import React from 'react';

// TODO: do some form here and link up this and the Auth page etc to make this show if user is not authenticated
class Login extends React.Component {
  constructor() {
    super();
  }

  login() {
    // set the authenticated prop to true for now
    this.props.authenticated = true;
  }

  render() {
    return(
      <div>
        this is the login page!
      </div>
    );
  }
};