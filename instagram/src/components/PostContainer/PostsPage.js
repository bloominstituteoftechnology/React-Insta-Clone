import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import { InstaTitle } from "../SearchBar/SearchBar";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: props.dummyData,
      input: "",

    };
  }


  newSearch = event => this.setState({ input: event.target.value });

  
  startSearch = event => {
    console.log("hello");
    event.preventDefault();
    let dummyData = this.state.dummyData.slice();
    dummyData = dummyData.filter(dummyData => {
     return dummyData.username === this.state.input
    });
    this.setState({
      dummyData: dummyData
    });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            input={this.state.input}
            newSearch={this.newSearch}
            startSearch={this.startSearch}
          />
        </header>
        <div>
          {this.state.dummyData.map(post => (
            <PostContainer key={post.timestamp} dummyData={post} />
          ))}
        </div>
      </div>
    );
  }
}
export default PostPage;
