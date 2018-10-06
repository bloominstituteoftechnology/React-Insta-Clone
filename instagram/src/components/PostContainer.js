import React from 'react';
import CommentSection from './CommentSection';




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
        document.getElementById(`commentSection__${this.state.id}`).focus();
    }

    render(){
        return(
            <div className="WholePost">
                <div className="username-thumbnail">
                    <div className="Thumbnail">
                        <img src ={this.state.thumbnailUrl}/>
                    </div>
                    <div className="username">
                        {this.state.username}
                    </div>
                </div>
                <div className="Post-Image">
                    <img src = {this.state.imageUrl}/>
                </div>
                <div className="bottom">
                    <button className="like-post" onClick={this.likeToggle}></button>
                    <button className="comment" onClick={this.commentInput}></button>
                    <button className="bookmark" onClick={this.bookmarkToggle}></button>
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

export default PostContainer;