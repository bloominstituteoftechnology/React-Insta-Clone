import React, { Component } from 'react';
import '../post.css';

class PostActions extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.obj
        }
    }

addLike(event){

}


render(){
return(
    <div>
    <div className={"action"} id="likeAction" onClick={this.addLike}></div>
    <div className={"action"} id="commentAction"></div>
    </div>
)
}
}
export default PostActions