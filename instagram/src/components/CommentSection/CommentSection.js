import React, {Component} from 'react'
import './CommentSection.css'
import {Glyphicon,Button} from 'react-bootstrap'
class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:props.comments,
            likes : props.likes,
            liked : false,
            newComment: {}
        }
        // console.log(this.state)
    }
    handleCommentInput = (event)=>{
        this.setState({newComment:{'text':event.target.value,"username":'StewieGriffin'}});
    }
    colorRedLike = (event) => {
            event.target.style.color = (
              event.target.style.color !== 'red' ? 'red' : 'grey'
            );
          }
    addComment = (event)=>{
        event.preventDefault();
        const comments = this.state.comments;
        comments.push(this.state.newComment);
        this.setState({ Comments: comments 
        ,newComment:{'text':'','username':'StewieGriffin'}});
    }
    addLike = (event) =>{
        // console.log('liking')
        this.colorRedLike(event);
        let newlike = !this.state.liked ? ++this.state.likes : --this.state.likes
        this.setState({ likes: newlike,liked:!this.state.liked});
    }
    componentDidMount() {
        this.setState({ comments: this.props.comments });
      }

    render (){
        return(
            <div className='listcomment'>
            <Glyphicon 
            glyph="heart"
            onClick={this.addLike}
             />
             <p>{this.state.likes} likes</p>
            {this.state.comments.map((comment,index)=>
                 <div className='comment'>  
                            {comment.text ?
                            <div className='comment'>
                            <strong>{comment.username}</strong>
                            <div className='comment__text'>
                                {comment.text}
                            </div>
                            </div>:null
                        }
                        </div>
            )}
            <form onSubmit={this.addComment}>
                <input className='container__comment__input' type="text" placeholder="Enter new Comment" onChange={this.handleCommentInput} value={this.state.newComment.text}/>
            </form> 
            </div>
        )
    }
}

export default CommentSection;