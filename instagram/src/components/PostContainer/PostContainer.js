import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

class PostContainer extends React.Component{
    constructor(props){
        super();

        this.state = {}
    }
    render(props){
        return(
            <div className="postContDiv">
            <div>{this.props.data.username}</div>
               <CommentSection data={this.props.data} />  
            </div>
           
        )
    }

}

export default PostContainer