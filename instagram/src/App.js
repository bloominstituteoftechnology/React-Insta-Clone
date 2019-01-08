import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchPosts: []
    };
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  searchPostsHandler = e => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchPostsHandler}/>
        <PostContainer posts={this.state.searchPosts.length > 0 ? this.state.searchPosts : this.state.data}/>
      </div>
    );
  }
}

export default App;
