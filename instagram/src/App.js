import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import loading from './loading.gif';
import dummyData from './dummy-data';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({posts: dummyData});
    }, 3000)
  }

  search = (term) => {
    let errorElement = document.querySelector('.error-404');
    let searchElement = document.querySelector('.searching');
    errorElement.style.display = 'none';

    let currentPosts = this.state.posts.slice();
    let matchingPosts = currentPosts.filter(post => {
    
      if (post.username === term) {
        return true;
      }

    });

    if (matchingPosts.length > 0) {
      console.log(errorElement);
      errorElement.style.background = loading;
      setTimeout( () => {
        this.setState({posts: matchingPosts});
      }, 2000);
      setTimeout(() => {
      errorElement.style.background = loading;  
      }, 2100);
    }
    else {
      console.log(errorElement);
      
      searchElement.classList.toggle('.searching');

      setTimeout(() => {
        errorElement.style.background = 'flex';  
      }, 2100);
      setTimeout(() => {
        searchElement.classList.toggle('.searching');
      }, 2150);
    }

  }
  render() {
    return (
      <div className="App">

        <nav className="container">
          <SearchBar searchTerm={this.search} />
        </nav>

        <div className="body-wrapper">

          <div className="container">
            <div className="searching">
              <img alt="Loading gif" src={loading}/>
              Loading..
            </div>
            <div className="error-404">
              <h1>We couldn't find anything</h1>
            </div>

          { this.state.posts.length === 0 ? (
            <div className="loading">
              <img alt="Loading gif" src={loading}/>
              Loading..
            </div>
            ) : (
            <div>
              <PostContainer posts={this.state.posts} />
            </div>
            )
          }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
