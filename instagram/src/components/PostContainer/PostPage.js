import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      // initialize an array for filtered post objects to go -- filteredPosts
      filteredPosts: [],
      // initialize an input string for our search input -- searchInput
      searchInput: ""
    };
  }

  componentDidMount() {
    this.setState({ postData: dummyData });
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Create a method that:
  searchHandler = e => {
    // 1) run call changeHandler event
    this.changeHandler(e);
    // 2) create a functional setState call so that we have access to prevState (prevState is important so that our postData is always the right data)
    this.setState(prevState => {
      // 3) Inside of our setState callback we will run a filter over prevState.postData
      // 4) Inside our filter we will access each post inside our postData array
      // 5) if the post's username includes any of the characters in our searchInput string then put them into a new array.
      const filteredPostArray = prevState.postData.filter(post =>
        post.username.includes(prevState.searchInput)
      );
      // 6) Then set the state of our filteredPosts array (which was empty) to be the value of our filtered postData array.
      return { filteredPosts: filteredPostArray };
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          searchInput={this.state.searchInput}
          searchHandler={this.searchHandler} // Pass down
        />
        <PostContainer
          // Refactor this postData prop to conditionally pass down either the postData array or the filteredPosts array
          postData={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.postData
          }
          addLike={this.addLike}
        />
      </div>
    );
  }
}

export default PostPage;
