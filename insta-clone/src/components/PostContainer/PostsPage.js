import React, { Component } from 'react';
import dummyData from './dummy-data'
import PostContainer from "./PostContainer.js"
class PostsPage extends Component {
    constructor(){
        super()
        this.state = {
            postData: []
        }
    }
    componentDidMount() {
        console.log("CDM invoked")
        this.setState({postData: dummyData})
      }
    

    render(){
    return(
        <section >
        <PostContainer post={this.state.postData} />
      </section>
    )
    }
}

export default PostsPage