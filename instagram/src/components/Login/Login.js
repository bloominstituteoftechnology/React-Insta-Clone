import React from 'react' 
import styled from 'styled-components'

const BTN = styled.button`
background-color: red`
;

class Login extends React.Component {
  state = {
    inputText: ''
  };

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('user', this.state.inputText);
    window.location.reload();
  };

  render() {
    return (
      <div>
        
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <BTN onClick={this.signIn}>Sign in</BTN>
      </div>
    );
  }
}


export default Login