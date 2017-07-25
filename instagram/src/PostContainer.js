import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
 constructor() {
   super(props);
 }

 render() {
   return (
     <div>
        <CommentSection comments = {this.props.postData.comments}
        <CommentSection />
     </div>
     );
  }
}


 export default PostContainer;
