import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login/Login";

// fontAwesome imports
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: "",
      username: "",
      password: "",
      loggedIn: false,
    };
  }

  saveStatetoLocalStorage() {
    for (let key in this.state) {
      console.log(key);
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      console.log(key);
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        console.log(value);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    window.addEventListener(
      "beforeunload",
      this.saveStatetoLocalStorage.bind(this)
    );
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 200);
    this.hydrateStateWithLocalStorage();
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStatetoLocalStorage.bind(this)
    );
    this.saveStatetoLocalStorage();
  }

  login = e => {
    e.preventDefault();
    this.setState({ username: e.target.username.value });
    this.setState({ password: e.target.password.value });
    this.setState({ loggedIn: true });
    localStorage.setItem("password", JSON.stringify(this.state.password));
    localStorage.setItem("username", JSON.stringify(this.state.username));
  };

  updateSearchText = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    if (!this.state.loggedIn) {
      return <Login login={this.login} />
    }

    return (
      <div className="App">
        <PostsPage
          posts={this.state.data}
          searchText={this.state.searchText}
          updateSearchText={this.state.updateSearchText}
          saveState={this.saveStatetoLocalStorage}
        />
      </div>
    );
  }
}

export default Authenticate(App);
