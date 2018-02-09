import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: this.setIndexes(dummyData),
    };
    this.state = {
      posts: this.state.posts,
      searchResults: this.state.posts,
      newComment: '',
      searchText: '',
    };
  }

  setIndexes = (posts) => {
    return posts.map((post, i) => {
      return {
        username: post.username,
        thumbnailUrl: post.thumbnailUrl,
        imageUrl: post.imageUrl,
        likes: post.likes,
        timestamp: post.timestamp,
        comments: post.comments,
        index: i,
      };
    });
};

  updateComment = (event) => {
    this.setState({
      posts: this.state.posts,
      searchResults: this.state.searchResults,
      newComment: event.target.value,
      searchText: this.state.searchText,
    });
  };

  addComment = (event) => {
    event.preventDefault();
    let searchResults = this.state.searchResults;
    const searchIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    searchResults = [...searchResults.slice(0, searchIndex), {
      username: searchResults[searchIndex].username,
      thumbnailUrl: searchResults[searchIndex].thumbnailUrl,
      imageUrl: searchResults[searchIndex].imageUrl,
      likes: searchResults[searchIndex].likes,
      timestamp: searchResults[searchIndex].timestamp,
      comments: [...searchResults[searchIndex].comments,
        {
          username: "algorithmsrock",
          text: this.state.newComment,
        }
      ],
      index: searchResults[searchIndex].index,
    }, ...searchResults.slice(searchIndex + 1, searchResults.length)];
    let posts = this.state.posts;
    const postIndex = searchResults[searchIndex].index;
    posts = [...posts.slice(0, postIndex), {
      username: posts[postIndex].username,
      thumbnailUrl: posts[postIndex].thumbnailUrl,
      imageUrl: posts[postIndex].imageUrl,
      likes: posts[postIndex].likes,
      timestamp: posts[postIndex].timestamp,
      comments: [...posts[postIndex].comments,
        {
          username: "algorithmsrock",
          text: this.state.newComment,
        }
      ],
      index: posts[postIndex].index,
    }, ...posts.slice(postIndex + 1, posts.length)];
    this.setState({
      posts,
      searchResults,
      newComment: '',
      searchText: this.state.searchText,
    });
    document.getElementById(`new-comment-${searchIndex}`).value = '';
  };

  updateSearch = (event) => {
    this.setState({
      posts: this.state.posts,
      searchResults: this.state.searchResults,
      newComment: this.state.newComment,
      searchText: event.target.value,
    });
  }

  search = (event) => {
    event.preventDefault();
    const posts = this.state.posts;
    const searchResults = posts.filter(post => post.username.match(new RegExp(this.state.searchText, 'i')));
    this.setState({
      posts,
      searchResults,
      newComment: '',
      searchText: '',
    });
    document.getElementById('search-input').value = '';
  }

  resetSearch = () => {
    this.setState({
      posts: this.setIndexes(this.state.posts),
      searchResults: this.setIndexes(this.state.posts),
      newComment: '',
      searchText: '',
    });
    document.getElementById('search-input').value = '';
  }

  addLike = (event) => {
    const index = Array.from(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(
      event.target.parentNode.parentNode.parentNode.parentNode);
    const posts = this.state.posts;
    const searchResults = this.state.searchResults;
    searchResults[index].likes++;
    this.setState({
      posts,
      searchResults,
      newComment: this.state.newComment,
      searchText: this.state.searchText,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Russell and Eileen's Instagram Clone</h1>
          <SearchBar onSubmit={this.search} onChange={this.updateSearch} onClick={this.resetSearch}/>
        </header>
        <p className="App-intro">
          Written in React.js.
        </p>
        <div>
          {this.state.searchResults.map((post, i) => {
            return (
              <div>
                <PostContainer key={i} username={post.username} thumbnailUrl={post.thumbnailUrl}
                  imageUrl={post.imageUrl} likes={post.likes} timestamp={post.timestamp}
                    comments={JSON.stringify(post.comments)} onClick={this.addLike} />
                <form key={i} onSubmit={this.addComment}>
                  <input key={i} className="new-comment" id={`new-comment-${i}`} type="text"
                    placeholder="Add a comment..." onChange={this.updateComment} />
                </form>
              </div>);
            })}
        </div>
      </div>
    );
  }
}

export default App;

/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      newComment: '',
    };
  }

  updateComment = (event) => {
    this.setState({
      posts: this.state.posts,
      newComment: event.target.value,
    });
  };

  addComment = (event) => {
    event.preventDefault();
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    const posts = this.state.posts;
    this.setState({
      posts: [...posts.slice(0, index), {
          username: posts[index].username,
          thumbnailUrl: posts[index].thumbnailUrl,
          imageUrl: posts[index].imageUrl,
          likes: posts[index].likes,
          timestamp: posts[index].timestamp,
          comments: [...posts[index].comments,
            {
              username: "algorithmsrock",
              text: `${this.state.newComment}`,
            }
          ],
        }, ...posts.slice(index + 1, posts.length)],
      newComment: '',
    });
    document.getElementById(`new-comment-${index}`).value = '';
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Russell and Eileen's Instagram Clone</h1>
          <SearchBar />
        </header>
        <p className="App-intro">
          Written in React.js.
        </p>
        <div>
          {this.state.posts.map((post, i) => {
            return (
              <div>
                <PostContainer key={i} username={post.username} thumbnailUrl={post.thumbnailUrl}
                  imageUrl={post.imageUrl} likes={post.likes} timestamp={post.timestamp}
                    comments={JSON.stringify(post.comments)} />
                <form key={i} onSubmit={this.addComment}>
                  <input key={i} className="new-comment" id={`new-comment-${i}`} type="text"
                    placeholder="Add a comment..." onChange={this.updateComment} />
                </form>
              </div>);
            })}
        </div>
      </div>
    );
  }
}

export default App;*/
