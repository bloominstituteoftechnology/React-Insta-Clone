import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import App from '../../App';
import LogIn from '../Autentication/LogIn';

class PostContainer extends React.Component{
    constructor(){
        super();
        this.state={
            id:0,
            likes:0,
            imageUrl:"",
            thumbnailUrl:"",
            username:'',
            timestamp:'',
            likedPost:false,
            bookmarkedPost:false,
        }
    }
    componentDidMount(){
        this.setState({
            likes:this.props.post.likes,
            id:this.props.id,
            imageUrl:this.props.post.imageUrl,
            thumbnailUrl:this.props.post.thumbnailUrl,
            timestamp:this.props.post.timestamp,
            username:this.props.post.username,
            bookmarkedPost:this.props.post.bookmarkedPost
        })
    }
    likeToggle=event=>{
        const likedPost=this.state.likedPost;
        const totalLikes=this.state.likes
            if(!likedPost){
                this.setState({likes:totalLikes+1});
            } else {
                this.setState({likes:totalLikes-1});
            }
            this.setState({likedPost:!likedPost});
    }
    bookmarkToggle=event=>{
        const bookmarkedPost=this.state.bookmarkedPost;
        this.setState({bookmarked:!bookmarkedPost})
    }
    commentInput=event=>{
        document.getElementById(`CommentSection__${this.state.id}`).focus();
    }
    logOut=event=>{
    this.render(<LogIn/>)
       
}

        
    

    render(){
        return(
            <div className="whole-post">
                <button onClick={this.logOut}/>
                <div className="username-thumbnail">
                    <div >
                        <img className="thumbnail" src ={this.state.thumbnailUrl}/>
                    </div>
                    <div className="username">
                        {this.state.username}
                    </div>
                </div>
                <div className="Post-Image">
                    <img src = {this.state.imageUrl}/>
                </div>
                <div className="bottom">
                    <button className="like-post" onClick={this.likeToggle}>Like</button>
                    <button className="comment" onClick={this.commentInput}>Add Comment</button>
                    <button className="bookmark" onClick={this.bookmarkToggle}>Bookmark</button>
                    <div className="likes">
                        <p>{this.state.likes} likes </p>
                    </div>
                    <div className="comments">
                        <CommentSection 
                                comments={this.props.post.comments}
                                timestamp={this.props.post.timestamp}
                                id={this.props.id}/>
                    </div>
                </div>
            </div>
        )
    }
} 
PostContainer.propTypes={
    timestamp: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    id: PropTypes.number
};
CommentSection.propTypes={
    comments: PropTypes.array,
    timestamp: PropTypes.string,
    id: PropTypes.number
}

export default PostContainer;
