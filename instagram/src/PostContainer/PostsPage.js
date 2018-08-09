import React from "react";
// import PropTypes from "prop-types";
import dummyData from "../dummy-data";
import PostContainer from './PostContainer';



// const Authenticate = Authenticate(App);


class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: props.comments,
      filteredPosts: [],

    };
  }


  componentDidMount(){
    console.log("CDM was invoked");
    this.setState({posts: dummyData});
  }

  searchPostsHandler = event => {
    const post = this.state.posts.filter(props => {
      if (props.username.includes(event.target.value)) {
        return 
      }
    })
  }


  // searchPo

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts} />
        {/* <Authenticate /> */}
      </div>
    );
  };
};

export default PostsPage;
