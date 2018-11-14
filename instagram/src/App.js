import React, { Component } from 'react';

// styles
import './App.css';

// data
import dummyData from './dummy-data'

// components
import PostPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'currentUser',
      data: [],
      searchText: '',
    };
  }

  componentDidMount() {
    let data = localStorage.getItem('instaClone');
    data = data ? JSON.parse(data) : dummyData;

    let user = localStorage.getItem('instaCloneLogin');
    user = user? (JSON.parse(user)).username : 'newUser';

    this.setState({
      data: data,
      username: user,
    })


    // if (localStorage.getItem('instaClone')) {
    //   this.setState({
    //     data: JSON.parse(localStorage.getItem('instaClone')),
    //   })
    // } else {
    //   this.setState({
    //     data: dummyData,
    //   })
    // }
  }

  componentDidUpdate(prevState) {
    if(prevState.data !== this.state.data) {
      localStorage.setItem('instaClone',JSON.stringify(this.state.data));
    }
  }

  handleSearch(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  submitComment(c, u, t) {
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.username === u && post.timestamp === t){
          return {
            ...post,
            comments: [...(post.comments), {
              username: prevState.username, 
              text: c}],
          }
        }
        return post;
      }), 
    }));
  }

  updateLikes(u, t, n) {
    this.setState(prevState => ({
      data: prevState.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          post.likes = n;
        }
        return post;
      })
    }));
  }

  handleRemoveComment(u, t, i) {
    this.setState(prevState => ({
      data: prevState.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          return {...post, comments: post.comments.filter((comment, id) => id !== i)}
        }
        return post;
      })
    }));
  }

  handleLogin(name, password) {
    localStorage.setItem('instaCloneLogin', JSON.stringify({
      username: name,
      password: password,
    }))

    window.location.reload()
  }

  setUsername(name){
    this.setState({
      username: name,
    })
  }

  render() {
    return (
      <div className="App">
        <PostPage
          data={this.state.data}
          searchText={this.state.searchText}
          handleSearch={e => this.handleSearch(e)}
          submitComment={(c, u, t) => this.submitComment(c, u, t)}
          updateLikes={(u, t, n) => this.updateLikes(u, t, n)}
          handleRemoveComment={(u, t, i) => this.handleRemoveComment(u, t, i)}
          handleLogin={(name, password) => this.handleLogin(name, password)}
          setUsername={(name) => this.setUsername(name)}
        />
      </div>
    );
  }
}

export default App;