import React from 'react';

import './LoginPage.scss';

export default class LoginPage extends React.Component {

  constructor() {

    super();

    this.state = {

      userField: '',
      passField: ''

    }

  }

  render() {

    return (

      <div className='login'>

        <form>

          <input type='text' placeholder='username' value={this.state.userField} />
          <input type='text' placeholder='password' value={this.state.passField} />
          <button type='submit'>Log In</button>

        </form>

      </div>

    );

  }

}
