import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import dummyData from './dummy-data.js';
import Authenticate from './Authentication/Authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 500)
  }

  searchFilter = (event) => {
    event.preventDefault();
    if (event.keyCode === 13 && event.target.value.length > 0) {
      let newData = this.state.data.filter((data) => {
        return data.username === event.target.value;
      })
      this.setState({ data: newData });
      event.target.value = '';
    }
  }

  render() {

    return (
      <div className="App">
        <PostsPage
          dummyData={this.state.data}
          search={this.searchFilter} />
      </div >
    );
  }
}

export default Authenticate(App);
