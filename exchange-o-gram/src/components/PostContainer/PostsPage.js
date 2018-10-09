import React from 'react';
import PostContainer from './PostContainer.js';
import './PostContainer.css'

class PostsPage extends React.Component{
    render(){
        return(
            <div className="posts">
                {this.props.posts.map((post, index)=>{
                return(
                    <div key={post.timestamp} className="containers">
                        <PostContainer index={index} post={post} addLike={this.props.addLike} addNewComment={this.props.addNewComment} deleteComment={this.props.deleteComment}/>
                    </div>
                )
                })}
            </div>
        )
        
    }
}

export default PostsPage;