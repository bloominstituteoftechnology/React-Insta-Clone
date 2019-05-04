import React, { Component } from 'react';
import dummyData from './dummy-data'
import PostContainer from "./PostContainer.js"
import SearchBar from "../SearchBar/SearchBar.js"
class PostsPage extends Component {
    constructor(){
        super()
        this.state = {
            postData: [],
            filteredPosts: []
        }
    }
    componentDidMount() {
        console.log("CDM invoked")
        this.setState({postData: dummyData})
      }

      searchPostsHandler = e => {
          const posts = this.state.postData.filter(p => {
              if (p.username.includes(e.target.value)) {
                  return p;
              }
          })
          this.setState({filteredPosts: posts})
      }
    

    render(){
    return(
        <section >
        <header className="App-header">
        <SearchBar searchPosts={this.searchPostsHandler} />
        </header>
        <PostContainer post={
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.postData} />
      </section>
    )
    }
}

export default PostsPage