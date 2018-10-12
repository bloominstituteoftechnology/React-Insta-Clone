import React from 'react';
import dummyData from "../src/dummy-data";
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      likes: Math.floor(Math.random() * 1000),
      filteredPosts: [],
      filterTarget: "",

    };
  }

  componentDidMount() {

      this.setState({ posts: dummyData });

  }

  increment = (e) => {
    this.setState( prevState => ({
      likes: prevState.likes + 1,
    })
    )
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
    return <PostsPage changeHandler={this.filter} filterTarget={this.state.filterTarget} data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} likes={this.state.likes} increment={this.increment} />
  }
}

export default Authenticate(App);
