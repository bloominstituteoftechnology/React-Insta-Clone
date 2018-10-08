import React, { Component } from 'react';
import PropTypes from "prop-types";
import './commentsection.css';




class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            newComment: '',
        }    
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    addNewComment = (e) => {
        e.preventDefault();
        const newCommentObj = {
            timestamp: "July 17th 2017, 12:42:40 pm",
            username: 'FreeKeyBoy',
            text: 'this.state.newComment'
        }
        this.setState({
            comments: [...this.state.comments, newCommentObj]
        })
    }

    textHandler = (e) => {
        this.setState ({
            newComment: e.target.value
        })
    }
    
    render(){
        return (
            <div>
                {this.props.Comments.map(comment =>{
                    return (
                        <div key={comment.text} className = "commentBody"> 
                        {/* apparently this needed a unique key */}
                        <strong>{comment.username}</strong><span className = "commentText">{comment.text}</span>
            </div>          
            )
        })}

        <form onSubmit = {(e) => {this.addNewComment(e)}}>    
            <div className = "timeStamp">{this.props.timestring}</div>
                <div>
                    <input className = "commentInput" type = 'text' placeholder = " Add a comment... " onChange = {this.textHandler} />
            </div>
        </form>
        </div>
    )
    }
    }



    CommentSection.propTypes = {
        Comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string,
                timestamp: PropTypes.string
            })
        ).isRequired    
    };

export default CommentSection ;