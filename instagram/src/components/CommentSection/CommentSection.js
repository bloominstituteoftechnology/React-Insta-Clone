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
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text} time ={comment.timestamp}/>)}
                <hr className ="hrLine postHrLine"/>
                <input className ="addComment" placeholder = "Add a comment..."/>
            </div>
            
            
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 