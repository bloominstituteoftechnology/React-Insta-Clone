import React, { Component } from "react";


class CommentContainer extends Component {
     constructor(props){
         super(props);
     }
   render() {


        return(
          <div>{this.props.caption}</div>
        )
        }
    }



export default CommentContainer;
