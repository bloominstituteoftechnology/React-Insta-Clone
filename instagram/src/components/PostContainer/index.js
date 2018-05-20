import React, { Component } from 'react';
import dateFile from "../../dummy-data";
import Post from "../PostContainer/Post";
import './PostContainer.css';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
         };
    }

    componentDidMount() {
        this.setState( {posts: dataFile} );
    }

    render() {
        return (
            <div className="Post-container">
                {this.state.posts.map(item => <Post key={item.username} post={item}/>)}
            </div>
        )
    }
}

export default PostContainer;
