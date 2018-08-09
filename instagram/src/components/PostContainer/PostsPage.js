import React, { Component } from "react";
import dummyData from "../../dummy-data.js";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar.js";
import styled from 'styled-components';

const Page = styled.div``

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredposts: []
          };
        }
      
        componentDidMount() {
          this.setState({ posts: dummyData });
        }

        searchpostsHandler = e => {
          const posts = this.state.posts.filter(posts => {
            if (posts.username.includes(e.target.value)) {
              return posts;
            }
          });
          this.setState({ filteredposts: posts });
        };
        render() {
          return (
            <Page>
              <SearchBar searchPosts={this.searchpostsHandler} />
              <PostContainer
                posts={
                  this.state.filteredposts.length > 0
                    ? this.state.filteredposts
                    : this.state.posts
                }
              />
            </Page>
          );
        }
      }

      export default PostsPage;