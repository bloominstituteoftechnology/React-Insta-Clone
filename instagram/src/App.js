import React, { Component } from 'react';
import dummyData from "./dummy-data";

import { AppContainer } from "./styles";

import PostsPage from "./components/PostContainer/PostsPage"
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  logout() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    window.location.reload();
  }

  render() {
    return (
      <AppContainer>
        <PostsPage data={this.state.data} logout={this.logout} searchText={this.state.searchText} />
      </AppContainer>
    );
  }
}

export default Authenticate(App);
