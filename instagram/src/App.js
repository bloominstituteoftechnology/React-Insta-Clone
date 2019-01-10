import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
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
      <button className="App-button" onClick={props.validate} value="Log in">
        Log In
      </button>
    </div>
  );
};

export default App;
