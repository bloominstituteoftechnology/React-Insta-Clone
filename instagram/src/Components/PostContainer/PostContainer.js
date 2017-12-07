import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  console.log('props are ', props)
  return(
    <div>
      <div>
        <div><img src={props.postData.thumbnailUrl} alt="img"/></div>
        <div><img src={props.postData.imageUrl} alt="img"/></div>
        <CommentSection post={props.postData}/>
      </div>
    </div>
  )
};

export default PostContainer;




// import React, { Component } from 'react';

// export default class PostContainer extends Component {
// 	constructor(props) {
// 		super(props);
//     this.state = {
//       username: [],
//     };
// 	}

//   render() {
//     return (
//       <div>PostContainer Connected</div>
//       )
//   }
// }
