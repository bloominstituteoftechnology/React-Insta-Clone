import React from 'react';
import "../src/index.css";
import dummyData from "../src/dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      likes: Math.floor(Math.random() * 1000),
      filteredPosts: [],
      filterTarget: "",
      index: null

    };
  }

  componentDidMount() {
   
      this.setState({ posts: dummyData });
 
  }
  increment = (e) => {
    if (this.state.index === null) {
    this.setState({ 
      likes: this.state.likes + 1,
      index: 0
    })
  }
  
  if (this.state.index < 2 && this.state.index >= 0 ) {
    this.setState({ 
      likes: this.state.likes + 1,
      index: this.state.index + 1
    })
  }

  if (this.state.index === 2) {
    this.setState({
      likes: this.state.likes + 1,
      index: 0
    })
  }


}
    
  

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
          target={this.state.likesTarget}
        />
      </div>
    );
  }
}

export default App;

