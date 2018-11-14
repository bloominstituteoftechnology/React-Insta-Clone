import React, { Component } from 'react';

const Authenticate = App =>
  class extends React.Component {
    render() {
      if (2 < 1) {
        return (
          <div>
            <form>
                <input 
                    className="username-input"
                    type="text"
                    placeholder="Your username.."
                    name="username"
                    // value={props.usernameInput}
                />
                <input 
                    className="password-input"
                    type="text"
                    placeholder="Your password.."
                    name="password"
                    // value={props.passwordInput}
                />
                <button>Login</button>
            </form>
          </div>
        )
      }
      else {
        return (console.log('yesss'), <App />)
      }
    }
  };

export default Authenticate