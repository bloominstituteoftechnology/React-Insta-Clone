import React from 'react';
import Comment from './Comment'
import './Comment.css'

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.data.comments
        }
    }    

    render(){
        return(
            <div className = "comment-container">
                {this.state.comments.map(data =>
                <Comment
                    name = {data.username}
                    comment = {data.text}
                />
                )}
                
            </div>
        ) 
    }
          
    
    
           
}

export default CommentSection