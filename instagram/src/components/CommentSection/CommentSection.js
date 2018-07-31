import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import Comments from './Comments'; 


class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}; 
    }

    render(){
        const comments = this.props.comments;   
        return(

            <div>
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text}/>)}
                
                <h4 className = "timeStamp">{this.props.time}</h4>
                <hr className ="postHrLine"/>
                <div className = "addComment">
                  <input className ="addCommentInput" placeholder = "Add a comment..."/>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                
            </div>
            
            
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 