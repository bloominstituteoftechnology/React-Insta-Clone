import React from 'react' 
import BTN from '../Styled Components/StyledComp'




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
      <div className='centered'>
      <div className='logindiv'>
        
      <img className="loginlogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'/>

        <p>Username:</p>
        <input
          className="loginbar"
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />


        <BTN onClick={this.signIn}>Log in</BTN>
      </div>

      
      </div>
    );
  }
}


export default Login