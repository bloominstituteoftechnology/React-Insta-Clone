import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

class PostContainer extends React.Component{
    render(props){
        return(
            <div className="postContDiv">
            <div>{this.props.dummyData.username}</div>
               <CommentSection dummyData={this.props.dummyData} />  
            </div>
           
        )
    }

}

export default PostContainer