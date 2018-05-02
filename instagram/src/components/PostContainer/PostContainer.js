import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
// import SearchBar from '../SearchBar/SearchBar'

class PostContainer extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.postData.username}</h1>
                {
                    this.props.postData.comments.map( (comment, i) => <CommentSection key={i+comment.username} comment={comment} /> )
                }
            </div>
        )
    }
}

export default PostContainer;