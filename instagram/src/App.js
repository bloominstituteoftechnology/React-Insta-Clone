import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import Authenticate from './components/Authentication/Authenticate.js'

const App = Authenticate(


  class App extends Component {
    constructor() {
      super()
      this.state = {
        data: [],
        filteredPosts: []
      }
    }

    componentDidMount() {
      this.setState({ data: dummyData });
    }

    handlePostSearch = event => {
      const posts = this.state.data.filter(post => {
        if (post.username.includes(event.target.value)) {
          return post;
        }
      });
      this.setState({ filteredPosts: posts });
    };

    render() {
      return (
        <div className="App">
          <header>
            <SearchBar searchPosts={this.handlePostSearch}
            />
          </header>
          <PostContainer
            data={this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data}
            
          />
        </div>

      );
    }
  }
)

export default App;
