import React, { Component } from 'react';
import PostComments from "./PostComments";


class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
    comments: this.props.obj.comments
    }
}

render(){
    return(
        <div className="commentsContainer">
            {this.state.comments.map(instance => {
                return (
                    <PostComments username={instance.username} text={instance.text} />
                        )
                    })}
        </div>
    )
}
}

export default Comments