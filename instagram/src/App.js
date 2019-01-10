import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from './components/Login/Login'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: false,
    }
  }

  validateHandler = event => {
    this.setState({validated: true})
  }

  render() {
    return (
      <div className="App">
        <Authenticate
          validated={this.state.validated}
          validateHandler={this.validateHandler}>
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
    <Login validateHandler={props.validateHandler}/>
  );
};

export default App;
