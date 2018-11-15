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
      // text: '',
      // id: 0,
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    Authenticate()
    return (
      
      <div className="App">
        <Login/>
        <header className="App-header">
          <SearchBar />
        </header>
          <PostsPage login={this.login} key={this.state.data.username} post={this.state.data}/>
      </div>
    );
  }
}

export default Authenticate(App);
