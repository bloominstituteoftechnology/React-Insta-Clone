import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
// import Authenticate from './components/Authentication/Authenticate'
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      //filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  // searchPostsHandler = e => {
  //   const posts = this.state.data.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };


  render() {
    return (
      <div>
        <SearchBar />
        <div className="App">
          <PostsPage passedData={this.state.data} />
        </div>
      </div>
    );
  }
}
// const WrappedApp = Authenticate(App);
export default App;