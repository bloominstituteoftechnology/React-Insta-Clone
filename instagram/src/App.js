import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login/Login";

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
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

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

  componentDidUpdate() {
    for (let key in this.state) {
      if (localStorage.getItem(key) !== this.state[key]) {
        console.log('setting', key);
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  }

  login = e => {
    e.preventDefault();
    this.setState({ username: e.target.username.value });
    this.setState({ password: e.target.password.value });

    // ensure password and username are not empty before logging user in
    if (this.state.username && this.state.password) {
      this.setState({ loggedIn: true });
      localStorage.setItem("password", JSON.stringify(this.state.password));
      localStorage.setItem("username", JSON.stringify(this.state.username));
    }
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.setState({ username: "", password: "", loggedIn: false });
  };

  updateSearchText = e => {
    this.setState({ searchText: e.target.value });
  };

  increaseLikes(index) {
    console.log(index);
  }

  filterPosts() {
    if (this.state.searchText === '') return this.state.data;
    return this.state.data.filter(d => {
      return d.username.includes(this.state.searchText);
    })
  }

  render() {
    console.log('rendering');
    // const displayedPosts = this.state.data.filter(d => d.username.includes(this.state.searchText));
    // console.log(displayedPosts);
    if (!this.state.loggedIn) {
      return <Login login={this.login} />;
    }

    let filteredPosts = this.filterPosts();
    return (
      <div className="App">
        <PostsPage
          posts={filteredPosts}
          searchText={this.state.searchText}
          updateSearchText={this.updateSearchText}
          logout={this.logout}
          username={this.state.username}
          increaseLikes={this.increaseLikes}
          filterPosts={this.filterPosts}
        />
      </div>
    );
  }
}

export default Authenticate(App);
