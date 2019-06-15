import React, { Component } from "react";
import dummyData from "../../dummy-data";
import '../../App.css';
import PostContainer from "./PostContainer";
import SearchBarContainer from "../SearchBar/SearchBarContainer";


class PostsPage extends Component {
    state = {
      coolData: [],
      filteredData: []
    };
  
    componentDidMount() {
      this.setState({ coolData: dummyData });
    }
  
    searchPostsHandler = e => {
      var updatedData = this.state.coolData;
      updatedData = updatedData.filter(function(item) {
        return item.search(e.target.value.toLowerCase()) !== -1;
      });
      this.setState({filteredData: updatedData });
    };
  
    render() {
      return (
        <div className="App">
          <SearchBarContainer searchfn={this.searchPostsHandler} />
          {this.state.coolData.map(e => (
            <PostContainer Data={e} key={e.timestamp} />
          ))}
        </div>
      );
    }
  }
  
  export default PostsPage;
  