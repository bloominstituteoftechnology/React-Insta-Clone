import React from 'react';
import styled from 'styled-components';
import './Login.css';

const StyledLoginContainer = styled.div`
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const StyledFormContainer = styled.div`
  background-color: rgb(253, 253, 253);
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 340px;
  width: 90%;
  border-radius: 3%;
  border: 1px solid gainsboro;
  -webkit-box-shadow: -4px 6px 10px 0px rgba(128,128,128,1);
  -moz-box-shadow: -4px 6px 10px 0px rgba(128,128,128,1);
  box-shadow: -4px 6px 10px 0px rgba(128,128,128,1);
`;

const StyledLogoTitle = styled.div`
  font-family: 'Grand Hotel', cursive;
  font-weight: 600;
  font-size: 5rem;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const StyledLoginInput = styled.input`
    margin-bottom: 20px;
    width: 70%;
    height: 30px;
    padding-left: 1%;
    background-color: whitesmoke;
    color: black;
    border-radius: 5%;
    font-family: 'Niramit', sans-serif;
`;

const StyledLoginButton = styled.button`
    width: 70%;
    height: 30px;
    padding: 0;
    background-color: #3897F0;
    border: none;
    border-radius: 3%;
    font-family: 'Niramit', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      input: '',
      password: '',
      clicked: false,
    };
  }

  usernameInput = event => {
    this.setState({
      input: event.target.value,
      username: event.target.value
    });
  };

  passwordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    this.setState({
      clicked: true,
    })
    setTimeout(() => {
      this.props.updateLogin(this.state.username);
      window.location.reload();
    }, 5000)
    
  };

  render() {
    return (
      <StyledLoginContainer>
        <StyledFormContainer>
          <StyledLogoTitle>Instagram</StyledLogoTitle>
          <StyledLoginForm>
            <StyledLoginInput
              value={this.state.input}
              onChange={this.usernameInput}
              placeholder='username'
            />
            <StyledLoginInput
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.passwordInput}
            />
            <StyledLoginButton type='submit' onClick={this.login}>
              Submit
            </StyledLoginButton>
          </StyledLoginForm>
          {this.state.clicked ? 
          <div className='sk-circle'>
            <div className='sk-circle1 sk-child'></div>
            <div className='sk-circle2 sk-child'></div>
            <div className='sk-circle3 sk-child'></div>
            <div className='sk-circle4 sk-child'></div>
            <div className='sk-circle5 sk-child'></div>
            <div className='sk-circle6 sk-child'></div>
            <div className='sk-circle7 sk-child'></div>
            <div className='sk-circle8 sk-child'></div>
            <div className='sk-circle9 sk-child'></div>
            <div className='sk-circle10 sk-child'></div>
            <div className='sk-circle11 sk-child'></div>
            <div className='sk-circle12 sk-child'></div>
          </div>
          :
          null}
        </StyledFormContainer>
      </StyledLoginContainer>
    );
  }
}

export default Login;
