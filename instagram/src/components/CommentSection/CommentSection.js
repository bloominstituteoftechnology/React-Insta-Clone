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
        
        if(localStorage.getItem(this.props.time) !== null){
            let data = localStorage.getItem(this.props.time);
            data = JSON.parse(data);  
            this.setState({comments: data, cmdCalled: true, temp: ""});
            
        } else {
            this.setState({comments:this.props.comments, cmdCalled: true, temp: ""});
        
        }
        
      }

    handleOnChange = event => {
        this.setState({
            temp: event.target.value
        });
    }
    
    addNewComment = event => {
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(event.keyCode === 13 ){ 
            comments.push({username: this.props.userIn, text:text})
            
            event.target.value = ""
            localStorage.setItem(this.props.poster, JSON.stringify(comments));
            localStorage.setItem(this.props.time, JSON.stringify(comments));
            this.setState({comments: comments, temp:""});
        }
        
    }

    addNewCommentClick = () => {
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(text.length > 0){
            comments.push({username: this.props.userIn, text:text})
            localStorage.setItem(this.props.poster, JSON.stringify(comments));
            localStorage.setItem(this.props.time, JSON.stringify(comments));
            
            this.setState({comments: comments, temp:""});
        }
        
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
    }  
    
    handleHover = event => {
        event.target.style.cursor = 'pointer';
    }

    handleDoubleClick = event => {
        console.log(this.props.userIn);
        console.log(event.target.innerHTML);
        console.log(event.target.className);
        if(this.props.userIn === event.target.innerHTML){
            let comments = this.state.comments.slice(); 
            event.target.className += " deleteComment"; 
            console.log(event.target.className);
            let check = document.querySelector(".deleteComment");
            console.log(check.className.includes("deleteComment"));
            comments = comments.filter(comment =>  comment.username !== this.props.userIn )
            localStorage.setItem(this.props.poster, JSON.stringify(comments));
            localStorage.setItem(this.props.time, JSON.stringify(comments));
            
            this.setState({comments: comments});
        }
    }

    render(){
        let comments;
        this.state.cmdCalled ? comments = this.state.comments : comments = [];
        
        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        
        let value;
        this.state.temp ? value = this.state.temp : value = ""; 
        return(

            <div >
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text} handleDoubleClick = {this.handleDoubleClick} userIn = {this.props.userIn}/>)}
                
                
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