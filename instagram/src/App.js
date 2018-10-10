import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
let data = dummyData;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      search: "",
    };
  }
  
  componentDidMount() {
    this.setState({dummyData: data});
  }

  searchInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
}

  searchPosts = event => {
    event.preventDefault();
    let searchInput = this.state.search;

    if (!searchInput) {
        this.setState({
          dummyData: data, 
          search: ""
        });
      }
    else {
        let posts = dummyData;
        let searchedPosts = posts.filter(post => {
          return post.username.includes(searchInput);
    })
      this.setState({dummyData: searchedPosts});
        }
}
      // else {
      //   this.setState({
      //     dummyData: dummyData,
      //     dummyData: filtered,
      //   })
      // }
    


  render() {
    return (
      <div className="App">
        <SearchBar 
        search={this.state.search}
        searchInputHandler={this.searchInputHandler}
        searchPosts={this.searchPosts}
        />
        <PostContainer 
        posts={this.state.dummyData}
        />
      </div>
    );
  }
}

export default App;
