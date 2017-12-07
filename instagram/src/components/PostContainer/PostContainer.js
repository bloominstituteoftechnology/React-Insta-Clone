import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: {},
            comments: [],
        };
    }

    componentWillMount () {
        this.setState({ posts: this.props.item, comments: this.props.item.comments });
        console.log("cdm");
    };
    render() {
        console.log("render");
        return (
            <div>
                <div><button type="alert">Click Me</button></div>
                <div>This is the post container</div>
                <div>{this.state.posts.username}</div>
                <div><img src = {this.state.posts.url} alt = "insta post" /></div>
                {console.log(this.state.posts.username)}
                {console.log(this.state.comments)}
                {this.state.comments.map((obj, i) =><CommentSection key={i} item={obj} />)}
            </div>
        );
    }
}

export default PostContainer;