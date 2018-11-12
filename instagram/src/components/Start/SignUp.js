import React from "react";
import logo from "../../assets/instagramlogin.png";
import {
  ContentWrapper,
  Box,
  SecondaryBox,
  InnerBox,
  SecondaryInnerBox,
  InputWrapper,
  LogoImg,
  Input,
  ErrorMessage,
  Button,
  Link,
  Text,
  HeadInfoText,
} from "./start-styles";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      fullName: "",
      username: "",
      password: "",
      error: undefined,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let error = this.props.handleNewProfile(
      this.state.phoneNumber,
      this.state.fullName,
      this.state.username,
      this.state.password
    );
    if (error) {
      this.setState({ error: error });
    }
  };

  render() {
    let fieldsValid =
      this.state.password &&
      this.state.username &&
      this.state.phoneNumber &&
      this.state.fullName;
    return (
      <ContentWrapper>
        <Box>
          <InnerBox onSubmit={this.handleSubmit}>
            <LogoImg src={logo} alt="logo" />
            <HeadInfoText>
              Sign up to see photos and videos from your friends.
            </HeadInfoText>
            <InputWrapper>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
              <Input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
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
            {this.state.error && (
              <ErrorMessage>{this.state.error}</ErrorMessage>
            )}
            <Button disabled={!fieldsValid} type="submit">
              Sign Up
            </Button>
          </InnerBox>
        </Box>
        <SecondaryBox>
          <SecondaryInnerBox>
            <Text> Have an account? </Text>
            <Link onClick={this.props.handleSwitchScreens}>Log In</Link>
          </SecondaryInnerBox>
        </SecondaryBox>
      </ContentWrapper>
    );
  }
}

export default SignUp;
