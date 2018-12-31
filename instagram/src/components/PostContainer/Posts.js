import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './likes';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes,
            comments: props.post.comments
        }
    }

    incrementLike = () => {
        let like = this.state.likes + 1;
        this.setState({ likes: like })
        console.log(this.state.likes);
    };
    componentDidMount(){
        const likeAmount = this.state.likes;
        if (localStorage.getItem(likeAmount)){
            this.setState({
                likes: JSON.parse(localStorage.getItem(this.state.likes))
            })
        }else{
            this.setLikes();
        }
    }

    componentWillUnmount(){
        this.setLikes();
    }

    setLikes = () =>{
        localStorage.setItem(
            this.state.likes,
            JSON.stringify(this.state.likes)
        )
    }
    commentHandler = e =>{
        this.setState({comment: e.target.value})
    }

    setComments = () =>{
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {text: this.state.comment, username: '@landoooooo'};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
        setTimeout(() => {
            this.setComments();
        }, 500)
    };
    render(){
        return(
            <div className="container">
                <div className="post-header">
                <div className="user-icon">
                    <img className="profile-pic" src={this.props.post.thumbnailUrl} alt="logo"/>
                </div>
                <div className="user-name">
                    {this.props.post.username}
                </div>
            </div>
            <div className="main-image">
                <img src={this.props.post.imageUrl} alt="post"/>
            </div>
            <div className="post-content">
                < Likes likes={this.state.likes} incrementLikes={this.incrementLike}/>
                <div className="comments">
                    <div className="comments-container">
                        <CommentSection postId={this.props.post.imageUrl} comments={this.props.post.comments} />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Posts;
