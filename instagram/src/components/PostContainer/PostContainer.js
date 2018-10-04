import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

class PostContainer extends React.Component{
    render(){
        return(
            <div className="postContDiv">
               <CommentSection dummyData={this.props.dummyData} />  
            </div>
           
        )
    }

}

export default PostContainer