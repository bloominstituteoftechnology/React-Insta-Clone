import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    console.log('Constructor Invoked!');
    super();
    this.state = { 
      instaData : [], 
      filteredPost: [],
      filterTarget: '',
    }
  }

  componentDidMount() {
    console.log('Component Did Mount Invoked!');
    setTimeout(() => {
      this.setState({ instaData: dummyData });
    }, 500) 
  }

  increment = prevState => {
    this.setState( prevState => ({ likes: prevState.likes + 1 }))
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  filter = event => {
    this.changeHandler(event);
    this.setState( prevState => {
      const filteredPosts = prevState.posts.filter (post => {
        return post.username.includes( prevState.filterTarget )
      });
      return { filteredPosts }
    })
  }

  render() {
    console.log('Render Invoked!');
    return (
      <div className="App">
        <SearchBar 
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
        />
        <PostsContainer 
          posts={                                
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
          likes={this.likes} 
          increment={this.increment}
        />
      </div>
    );
  }
}

export default App;                                               
