import React from "react";
import logo from "../../assets/instagramlogin.png";
import {ContentWrapper, Box, SecondaryBox, InnerBox, SecondaryInnerBox, InputWrapper, LogoImg, ErrorMessage, Input, Button, Link, Text} from "./start-styles"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const error = this.props.handleLoginSubmit(this.state.username, this.state.password);
    console.log(error)

    if (error) {
      this.setState(() => ({ 
        error: error,
        username: '',
        password: ''
       }))
    }
    
  };

  render() {
    let fieldsValid = this.state.username && this.state.password;
    return (
      <ContentWrapper>
        <Box login='true'>
          <InnerBox onSubmit={this.handleSubmit}>
            <LogoImg src={logo} alt="logo"/>
            <InputWrapper>
              <Input
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </InputWrapper>
            {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
            <Button disabled={!fieldsValid} type="submit">
              Log in
            </Button>
          </InnerBox>
        </Box>
        <SecondaryBox>
          <SecondaryInnerBox>
            <Text> Don't have an account? </Text>
            <Link onClick={this.props.handleSwitchScreens}>Sign Up</Link>
          </SecondaryInnerBox>
        </SecondaryBox>
      </ContentWrapper>
    );
  }
}

export default Login;
