import React from 'react' 



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
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}


export default Login