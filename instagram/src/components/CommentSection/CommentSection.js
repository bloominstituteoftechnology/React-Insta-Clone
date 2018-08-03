import React from 'react';

import PropTypes from 'prop-types'; 
import Comments from './Comments'; 
import * as moment from 'moment'; 
import {NewComment, TimeStamp, AddCommentInput, PostHrLine, AddComment,SubmitIcon} from './CommentSectionStyled.js';

class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {comments: [], cmdCalled: false, placeholder: this.props.placeholder}; 
    }

    componentDidMount () {
        let storedComments; 
        if(localStorage.getItem('comments')){
            storedComments = JSON.parse(localStorage.getItem('comments'));
        } else {
            storedComments = this.props.comments; 
        }

        this.setState({comments:storedComments, cmdCalled: true, temp: "",});
      }

    handleOnChange = event => {
        this.setState({
            temp: event.target.value
        })
    }
    
    addNewComment = event => {
        
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(event.keyCode === 13 ){ 
            comments.push({username: this.props.userIn, text:text})
            
            event.target.value = ""
            localStorage.setItem("comments", JSON.stringify(comments));
            this.setState({comments: comments, temp:""});
        }

        
        
    }

    addNewCommentClick = () => {
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(text.length > 0){
            comments.push({username: this.props.userIn, text:text})
            localStorage.setItem("comments", JSON.stringify(comments));
            this.setState({comments: comments, temp:""});
        }
        console.log('clicked');
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
    }  
    
    handleHover = event => {
        event.target.style.cursor = 'pointer';
    }

    render(){
        
        let comments;
        this.state.cmdCalled ? comments = this.state.comments : comments = [];

        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        
        let value;
        this.state.temp ? value = this.state.temp : value = ""; 
        return(

            <div >
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text} onDoubleClick = {this.deleteComment}/>)}
                
                
                <TimeStamp>{time}</TimeStamp>
                
                <PostHrLine />
                
                <AddComment>

                  <NewComment>
                    <AddCommentInput value = {value} onChange = {this.handleOnChange} onKeyUp = {this.addNewComment} placeholder = "Add a comment..." />  
                    
                    <br/>
                    <SubmitIcon onMouseEnter = {this.handleHover} onClick = {this.addNewCommentClick}><i className="fas fa-ellipsis-h"></i>Submit</SubmitIcon>
                 
                 </NewComment>
                </AddComment>
            </div>
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 