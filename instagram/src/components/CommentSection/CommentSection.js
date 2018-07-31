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
        //console.log(comments);
        console.log(this.props)
        return(

            <div>
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text} time ={this.props.time}/>)}
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