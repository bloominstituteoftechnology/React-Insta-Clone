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
        {/* {this.validated ? null : (
          <button className="App-button" onClick={this.validate} value="Log in">
            Log In
          </button>
        )} */}
      </div>
    );
  }
}

const Authenticate = props => {
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
    <div>
      <Login />
      <button className="App-button" onClick={props.validate} value="Log in">
        Log In
      </button>
    </div>
  );
};

export default App;
