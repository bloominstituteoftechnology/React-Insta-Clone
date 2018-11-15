import React, { Component } from "react";
import Login from './components/Login/Login';
import dummyData from "./dummy-data";
import Authenticate from './Authentication/Authenticate';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from './components/PostContainer/PostsPage';
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      username: '',
      // text: '',
      // id: 0,
    };
  }

  componentDidMount() {
    let usernameInStorage = localStorage.getItem('username');
    if (usernameInStorage) {
      this.setState({username: usernameInStorage})
    }
    this.setState({ data: dummyData });
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <PostsPage 
            login={this.login} 
            key={this.state.data.username} 
            post={this.state.data}
            handleChange={this.handleChange}
            username={this.state.username}
          />
      </div>
    );
  }
}

export default Authenticate(App);
