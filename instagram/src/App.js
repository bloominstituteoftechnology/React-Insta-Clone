import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.App {
  text-align: center;
  border: 1px solid lightgrey;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
`;

const Button = styled.button`
  margin: 4% auto;
  height: 30px;
  width: 85%;
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: false
    };
  }

  validate = () => {
    this.setState({ validated: true });
  };

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Authenticate validated={this.state.validated} validate={this.validate}>
          <PostsPage />
        </Authenticate>
      </div>
    );
  }
}

const Authenticate = props => {
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
    <div className="login-page-container">
      <Login />
      <Button onClick={props.validate} value="Log in">
      {/* <button className="App-button" onClick={props.validate} value="Log in">*/}
        Log In
      </Button>
    </div>
  );
};

export default App;
