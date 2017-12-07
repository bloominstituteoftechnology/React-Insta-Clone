import React, {Component} from 'react'
import './CommentSection.css'

class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:props.comments,
            newComment: {}
        }
        console.log(this.state.comments)
    }
    handleCommentInput = (event)=>{
        this.setState({newComment:{'text':event.target.value,"username":'StewieGriffin'}});
    }
    addComment = (event)=>{
        event.preventDefault();
        const comments = this.state.comments;
        comments.push(this.state.newComment);
        this.setState({ Comments: comments 
        ,newComment:{'text':'','username':'StewieGriffin'}});
    }
    componentDidMount() {
        this.setState({ comments: this.props.comments });
      }

    render (){
        return(
            <div className='listcomment'>
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