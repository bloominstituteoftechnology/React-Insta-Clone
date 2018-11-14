import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import '../CommentSection/CommentSection';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes: props.post.likes,
            user: props.user
        }
    }
    incrementLikes = () => {
        let likes = this.state.likes +1;
        this.setState({ likes});
    }
    render(){
        return (
            <div className="post">
                <div className="post-header">
                    <img
                        src={this.props.post.thumbnailUrl}
                        alt=''
                        className='post-username-img'
                    />
                    <h1 className="post-username">{this.props.post.username}</h1>
            </div>
                
            <div>
                <img className="post-img" src={this.props.post.imageUrl} alt="" />
                <div className="comment-bottom">
                    <div className = "like-bar">
                        <p className='likes'>{this.state.likes} likes</p>
                        <p className='heart-emoji' onClick ={this.incrementLikes}>♡ </p>
                        <p>💬</p>
                    </div>
                </div>
            </div>
                <CommentSection comments={this.props.post.comments} user={this.props.user} />
        </div>
        
        )
        }
 }
    

export default Post