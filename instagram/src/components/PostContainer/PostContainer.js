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
            newComment:'',
            comments:props.data.comments
        }
    }
    addNewComment = (event) =>{
        event.preventDefault();
        this.setState({comments:[...this.state.comments,{
            username:'Frank-E-B',
            text:this.state.newComment
        }]},this.setState({newComment:''}))

        
    }
    handleCommentChange = event =>{
        this.setState({newComment:event.target.value})
    }
    handleLikeClick = event =>{
        this.setState({likes: (this.state.likes+1)})
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
                            <CommentSection data={element}/>
                        )
                    })
                }
                <p className='post-time-stamp'>{this.props.data.timestamp}</p>
                <NewCommentSection 
                                addNewComment={this.addNewComment}
                                postId = {this.props.postId}
                                handleCommentChange={this.handleCommentChange}
                                newComment={this.state.newComment}
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

