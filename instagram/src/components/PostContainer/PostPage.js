import React from "react";
import dummyData from "../../dummy-data";
import SearchBarNavContainer from "../SearchBar/SearchBarNavContainer";
import PostContainer from "../PostContainer/PostContainer";
import "../../App.css";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLiked = timestamp =>
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.timestamp === timestamp) {
          return {
            ...post,
            likes: post.likes + 1
          };
        } else return post;
      })
    }));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            <SearchBarNavContainer
              handleChange={this.handleChange}
              search={this.state.searchText}
            />
          }
        </header>
        <div>
          {this.state.data.map((post, index) => {
            return (
              <PostContainer
                data={post}
                key={index}
                handleLiked={this.handleLiked}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostPage;
