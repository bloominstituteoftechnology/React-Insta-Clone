import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import DummyData from './dummy-data';
import PostPage from './Components/PostContainer/PostsPage';
import withAuthenticate from './Components/Authentication/withAuthenticate';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      dummyData: [],
      searchData: []
    }
  }
  
componentDidMount() {
  this.setState({
    dummyData: dummyData
  })
}

searchBarHandler = event => {
  const posts = this.state.dummyData.filter( post => {
    if (post.username.includes(event.target.value)) {
      return post
    }
  });
  this.setState({
    searchData: posts
  })
}

const componentFromWithAuthenticate = () => {
this.state.ComponentFromWithAuthenticate(
  PostPage => {

  }
)
}

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer postData={
          this.state.searchData.length > 0 ?
          this.state.searchData :
          this.state.dummyData} />
        <ComponentFromWithAuthenticate />  
      </div>
    );
  }
}

export default App;