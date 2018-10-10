import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data'
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allUserData: [],
      searchInput: '',
    }
  }
  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    },
      console.log(this.state.searchInput)
    )
  }

  componentDidMount() {
    this.setState({ allUserData: dummydata })
  }
  filter = (event) => {
    event.preventDefault();

    this.setState({
      allUserData: this.state.allUserData.filter((obj, i, arr) => {
        if (obj.username === this.state.searchInput) {
          return obj
        }
      }
      )
    })

  }
  reset = (event) => {
    event.preventDefault();
    this.setState({
      allUserData: dummydata,
      searchInput: ""
    })
  }
  login = () => {
    localStorage.setItem('Username', this.state.username);
  }
  usernameHandler = (event) => {
    this.setState({
      username: event.target.value
    }

    )
  }
  render() {

    return (
      <div className="App">

        <PostsPage
          searchInput={this.state.searchInput}
          searchHandler={this.searchHandler}
          filter={this.filter}
          reset={this.reset}
          allUserData={this.state.allUserData}
        />


      </div>
    );
  }
}

export default Authenticate(App);
