import React from 'react';
import Comment from './Comment';
import InputComment from './InputComment';



class CommentContainer extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            inputText: '',
            likes: props.likes, //400 likes
            like: false
        };
    }

    handleLike = () => {
        let likesNum = this.state.likes;
        if(this.state.like === false) {
            likesNum++
        } else {
            likesNum--
        }
        this.setState({
            likes: likesNum,
            like: !this.state.like
        })
    }

    handleChange = event =>{
        this.setState({
            inputText: event.target.value
        })
    }

    handleAddComment = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, {username: 'SpyGirl', text: this.state.inputText}],
            inputText: ''
        })
    }

    render() {
        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} commentData={comment}/>; 
        });

        return (
            <div className="post-container">
                <div className="post-icons">
                    <i onClick={this.handleLike} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>

                <p className="post-text__bold mg-bottom">{this.state.likes} likes</p>
                {comments}
                <p className="timestamp">{this.state.timestamp}</p>
                <InputComment inputText={this.state.inputText} handleChange={this.handleChange} handleAddComment={this.handleAddComment}/>
            </div>
        );
    }

}

export default CommentContainer;