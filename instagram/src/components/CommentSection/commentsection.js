import React from 'react';
import Comments from './comments';
import './CommentSection.css';



class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allComments: props.comments,
        }
        console.log(this.state);
    }


    render(){
        return(
            <div>
                {this.state.allComments.map((comment, index) => <Comments key= {index} comments={comment} />)}
            <form className = 'comment-form'>
                <input 
                placeholder= 'Add a comment...'>
                </input>
        </form>
            
            </div>
        );
    }
}


export default CommentSection;