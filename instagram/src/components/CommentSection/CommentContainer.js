import React from 'react';
import CommentSection from './CommentSection';

class CommentContainer extends React.Component {
    render(){
        return(
            <><CommentSection 
            
            data={this.props.data}
            
               
            
             /></>
            )
    }
}

export default CommentContainer