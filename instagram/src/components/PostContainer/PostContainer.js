import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostHeader/PostHeader';
import LikesBar from '../LikesBar/LikesBar';
import NewCommentSection from '../NewCommentSection/NewCommentSection';
import PropTypes from 'prop-types';



class PostContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:props.data.likes,
            comments:props.data.comments
        }
    }
    render(){
        return(
            <div className='post-container'>
                <PostHeader data={this.props.data}/>
                <img className='post-container-image' src={this.props.data.imageUrl}></img>
                <LikesBar 
                    handleLikeClick={this.handleLikeClick}
                    likes={this.state.likes} />
                {
                    this.state.comments.map(element =>{
                        return (
                            <CommentSection 
                                    data={element}
                                    removeComment = {this.props.removeComment}
                            />
                        )
                    })
                }
                <p className='post-time-stamp'>{this.props.data.timestamp}</p>
                <NewCommentSection 
                                postId = {this.props.postId}
                                addNewComment={this.props.addNewComment}
                                handleCommentChange={this.props.handleCommentChange}
                                handleLikeClick = {this.props.handleLikeClick}
                                newComment={this.props.newComment}
                                
                />
                <br />
                <br />
            </div>
    
        )
            
    }
}


PostContainer.propTypes={
    data:PropTypes.object,
}

export default PostContainer;

