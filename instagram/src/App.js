import React, { Component } from 'react';
import Fuse from 'fuse.js';
import moment from 'moment';
import './App.scss';

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import LoginPage from './components/Authentication/LoginPage';

const LoginAuthenticator = Authenticate(PostsPage)(LoginPage);

class App extends Component {

  constructor() {

    super();

    this.state = {

      data: [],
      displayedData: [],
      username: '',
      loggedIn: false,
      addingPost: false

    }

  }

  componentDidMount() {

    let initialData = dummyData;

    if (localStorage.data) {

      initialData = JSON.parse(localStorage.data);

    }

    if (localStorage.loggedIn === 'true') {

      this.setState({loggedIn: true, username: localStorage.currentUser});

    }

    this.setState({data: initialData, displayedData: initialData});

  }

  componentDidUpdate() {

    localStorage.data = JSON.stringify(this.state.data);
    localStorage.loggedIn = this.state.loggedIn;
    localStorage.currentUser = this.state.username;

  }

  addComment = (comment, index) => {

    const newData = this.state.data;
    newData[index].comments.push(comment);

    this.setState({data: newData});

  }

  removeComment = (postIndex, commentIndex) => {

    const newData = this.state.data;
    newData[postIndex].comments.splice(commentIndex, 1);
    this.setState({data: newData});

  }

  addLike = postUrl => {

    const index = this.state.data.findIndex(item => item.imageUrl === postUrl);
    const newData = this.state.data;

    if (!newData[index].likedBy) {

      newData[index].likedBy = [];

    }

    if (!newData[index].likedBy.includes(this.state.username)) {

      newData[index].likes++;
      newData[index].likedBy.push(this.state.username)

    }

    else {

      newData[index].likes--;
      newData[index].likedBy.splice(newData[index].likedBy.indexOf(this.state.username), 1);

    }

    this.setState({data: newData});

  }

  search = searchTerm => {

    const options = {
      shouldSort: true,
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
      ]
    };

    const fuse = new Fuse(this.state.data, options);
    const result = fuse.search(searchTerm);

    this.setState({displayedData: searchTerm === '' ? this.state.data : result});

  }

  setUsername = newUsername => {

    if (newUsername !== '')
      this.setState({username: newUsername, loggedIn: true});
    else
      this.setState({loggedIn: false});

  }

  addPost = val => {

    this.setState({addingPost: val});

  }

  submitPost = img => {

    const newPost = {

      username: this.state.username,
      thumbnailUrl: 'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg',
      imageUrl: `${this.state.username}-${img.name}`,
      likes: 0,
      timestamp: moment().format('MMMM Do YYYY hh:mm:ss A'),
      comments: [],
      urlIsLocal: true

    }

    const updatedData = this.state.data;
    updatedData.unshift(newPost);

    const reader = new FileReader();

    const username = this.state.username;

    reader.onload = function(base64) {

      localStorage[`${username}-${img.name}`] = reader.result;

    }

    reader.readAsDataURL(img);

    this.setState({data: updatedData}, () => {
      this.setState({addingPost: false});
      setTimeout(() => {
        this.forceUpdate();
        console.log("UPDATED");
      }, 1000);
    });

  }

  render() {
    return (
      <div className='app'>

        <LoginAuthenticator
          displayedData={this.state.displayedData}
          searchFunc={this.search}
          addLike={this.addLike}
          addComment={this.addComment}
          removeComment={this.removeComment}
          username={this.state.username}
          setUsername={this.setUsername}
          loggedIn={this.state.loggedIn}
          addPost={this.addPost}
          addingPost={this.state.addingPost}
          submitPost={this.submitPost}
        />

      </div>
    );
  }
}

export default App;
