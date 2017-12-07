import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

export const PostContainer = (props) => {
  return(
    <div>
      {props.dummyData.map(((post, index) => {
          return <CommentSection key={index} post={post}/>
      }))}
    </div>
  )
};




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
