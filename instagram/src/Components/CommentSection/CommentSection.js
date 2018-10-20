import React, { Component } from 'react';
import './commentSection.css'
import Comment from './Comment'



class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:props.obj.comments,
            newComment: '',
            likes: props.obj.likes,
        };

    }
   
    addLikes = () => {
        this.setState({likes: this.state.likes +1})
    }

    onChangeHandler = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    addNewComment = e => {
        e.preventDefault();
        const nextComment = {text: this.state.newComment,
            username: 'sweetooth'};
        const comments = this.state.comments.slice();
        comments.push(nextComment);
        this.setState({
            comments: comments,
            newComment: ''

        })
    }
    render(){
        return (
            
            <div>
        <section className='top-bottom'>{/*Like Comment Bookmark*/}
            <div className='heart-comment'>
            <img onClick={this.addLikes}src='https://images.vexels.com/media/users/3/147092/isolated/preview/c35ccbb5fe122c777314c1849ee1ba50--cone-da-linha-do-cora--o-instagram-by-vexels.png'></img>
            <img src='data:image/png;base64,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'></img>
            </div>
            
            <img className ='solo-icon'src='https://images.vexels.com/media/users/3/147082/isolated/preview/2c1df3318e5565d550486744cba84e5f-instagram-bookmark-line-icon-by-vexels.png'></img>
        </section>
        <section className ='likes'>{/*Likes*/}
            
              <div>{this.state.likes} </div>
              <h1>likes</h1>      
                  
        </section>
        <section className='comments-time'>{/*Comments and Time posted*/}
                {this.state.comments.map((comment, index) => 
                <Comment key={index} value={this.state.newComment}  comment={comment}  />)}    
        </section>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            className="commentAdd"
            placeholder="Add a Comment..."
            onChange={this.onChangeHandler}
            name="newComment"
            value={this.state.newComment}
            autoComplete="off"
            
          />
        </form>
        
        </div>
        
        );
    }
}







export default CommentSection