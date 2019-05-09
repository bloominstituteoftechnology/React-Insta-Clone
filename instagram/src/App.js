import React from "react";

import PostPage from "./Components/PostContainer/PostPage";
import LoginPage from "./Components/Login/LoginPage";
import withAuthenticate from './Components/Authentication/withAuthenticate';
import PropTypes from "prop-types";


const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);



class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
        
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
      // comments: PropTypes.arrayOf(
      //    PropTypes.string
      // )
    })
  )
};

export default App;
