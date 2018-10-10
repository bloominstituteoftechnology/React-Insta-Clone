import React from 'react';
import "../src/index.css";
import dummyData from "../src/dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      likes: 370,
      filteredPosts: [],
      filterTarget: ""
    };
  }

  componentDidMount() {
   
      this.setState({ posts: dummyData });
 
  }
  increment = prevState => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filter = event => {
    this.handleInput(event); 
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter(post => {
        return post.username.includes(prevState.filterTarget);
      });
      return { filteredPosts }
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
        />
        <PostContainer
          data={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
          likes={this.state.likes}
          increment={this.increment}
        />
      </div>
    );
  }
}

export default App;

