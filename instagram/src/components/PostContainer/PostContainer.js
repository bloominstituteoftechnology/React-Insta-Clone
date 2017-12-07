import React, {Component} from "react";
import CommentSecion from "../CommentSection/CommentSection";
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.postData,
            newComment: {}
        };
    }

    render() { < div className = 'section' > <div className='section__header'>
        <img className='section__header__picture' src={this.state.data.thumbnailUrl}/>
        <h4>{this.state.data.username}</h4>
    </div> < div className = 'section__content' > <img className='section__content__picture' src ={this.state.data.imageUrl}/> < /div>
      <div className='section__comment'>
        <CommentSection  likes= {this.state.data.likes} comments={this.state.data.comments}/ > </div> < /div>  
	}
}



export default PostContainer;