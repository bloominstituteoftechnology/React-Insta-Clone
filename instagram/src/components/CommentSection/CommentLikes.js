import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class CommentLikes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes : props.likes,
            isLiked : false
        }
    }

    addLike = event => {
        event.preventDefault();
        let newLikes = this.state.likes;
        newLikes += 1;
        this.setState({
            likes: newLikes,
            isLiked: true
        })
    }

    subtractLike = event => {
        event.preventDefault();
        let newLikes = this.state.likes;
        newLikes -= 1;
        this.setState({
            likes: newLikes,
            isLiked: false
        })
    }

    render(){
        const isLiked = this.state.isLiked;
        let likeIcon;

        if(isLiked === true) {
            likeIcon = <span className = 'like-icon-true' onClick = {this.subtractLike}><i className = 'fa fa-heart'></i></span>
        } else if (isLiked === false){
            likeIcon = <span className = 'like-icon-false' onClick = {this.addLike}><i className="far fa-heart"></i></span>
        }
        return (
            <div className = 'comment-likes'>
            <div className = 'like-icons'>
            {likeIcon}
            <span className = 'comment-icon'><i class="far fa-comment-alt"></i>
</span>
            </div>
            <span className = 'likes'>{this.state.likes} likes</span>   
            </div>
        )
    }
}

export default CommentLikes;