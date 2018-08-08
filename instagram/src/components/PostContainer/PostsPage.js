import React, { Component } from "react";
import dummyData from "../../dummy-data.js";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar.js";

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filteredData: []
          };
        }
      
        componentDidMount() {
          this.setState({ data: dummyData });
        }
        searchDataHandler = e => {
          const data = this.state.data.filter(posts => {
            if (posts.username.includes(e.target.value)) {
              return posts;
            }
          });
          this.setState({ filteredData: data });
        };
        render() {
          return (
            <div>
              <SearchBar searchPosts={this.searchDataHandler} />
              <PostContainer
                posts={
                  this.state.filteredData.length > 0
                    ? this.state.filteredData
                    : this.state.data
                }
              />
            </div>
          );
        }
      }

      export default PostsPage;