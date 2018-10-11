import React from 'react';
import ReactDOM from 'react-dom';
import CommentContainer from '../CommentSection/CommentContainer';
import './PostContainer.css'

class PostContainer extends React.Component{
    constructor(props){
        super();

        this.state = {}
    }
    render(props){
        return(
            <div className="postContDiv">
            <div>{props.data.username}</div>
               <CommentContainer 

               Comment={this.props.Comment}
               
               LikeButton={this.props.LikeButton} 
               
               data={this.props.data} />  
            </div>
           
        )
    }

}

export default PostContainer