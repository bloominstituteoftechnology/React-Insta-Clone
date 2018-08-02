import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import Authenticate from './components/Authentication/Authenticate.js'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

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
        <StyledApp>
          <header>
            <SearchBar searchPosts={this.handlePostSearch}
            />
          </header>
          <PostContainer
            data={this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data}
            
          />
        </StyledApp>

      );
    }
  }
)

export default App;
