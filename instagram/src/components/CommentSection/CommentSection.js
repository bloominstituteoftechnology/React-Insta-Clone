import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Heart from "../../assets/heart.svg";

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            newComment: "",
            likes:0
        };
    }

    addNewComment = event =>{
        
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments,  {username: "Tsai", text: this.state.newComment}], 
            newComment: ""});
    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    increaseLikes = event =>{
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1});
    }

    render(){
        return(
            <div className="comment-section">
                {this.state.likes}
                <img onClick={this.increaseLikes} className="heart" src={Heart} alt=""/>
                {this.state.comments.map((comment, index) =>
                    <Comment 
                        key={index}
                        comment={comment} />
                )}
                <CommentInput 
                    addNewComment={this.addNewComment}
                    handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default CommentSection;