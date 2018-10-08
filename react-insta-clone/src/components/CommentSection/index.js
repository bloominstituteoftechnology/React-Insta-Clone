import React, { Component } from "react";


class CommentSection extends Component {
     constructor(props){
         super(props);
     }
   render() {
       const caption = this.props.caption;
       console.log(caption)



        return(
          <div>{caption}</div>
        )
        }
    }



export default CommentSection;
