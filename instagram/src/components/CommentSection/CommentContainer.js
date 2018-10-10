import React from 'react';
import CommentSection from './CommentSection';

class CommentContainer extends React.Component {
    render(){
        return(
            <><CommentSection 
            
            data={this.props.data}
            
            Comment={this.props.Comment}
               
            LikeButton={this.props.LikeButton} 
            
             /></>
            )
    }
}

export default CommentContainer