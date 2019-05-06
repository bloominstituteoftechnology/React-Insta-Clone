import React from 'react';
import { Form, Input } from 'reactstrap';
import * as Icon from 'react-feather';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments,
            likes: props.likes,
            comment: ''
         }
    }

    addNewComment = e => {
        e.preventDefault();
        this.serState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.comment,
                    username: 'Groucho Marx'
                }
            ],
            comment: ' '
        })
    }

    handleInputChange = e => {
        this.serState({
            comment: e.target.value
        })
    }

    increaseLikes = () => {
        this.setState({
          likes:this.state.likes + 1
        })
    }
   
    render() { 
        return ( 
            <div className='commentSection'>
             <div className='likeAndComment'>
                <Icon.Heart 
                className='icons'
                onClick={this.increaedLikes} />
                <Icon.MessageCircle className='icons' />
             </div>
              <p>{this.state.likes} likes</p>
              {this.state.comments.map((comment,i) => {
                return (
                 <div className='comment' key={i}>
                     <h3>{comment.username}</h3>
                     <p>{comment.text}</p>
                 </div>
                )
            })}
         <Form onSubmit={this.addNewComment}>
            <Input 
                name='comment'
                placeholder='Add a comment...'
                type='text'
                onChange={this.handleInputChange}
                value={this.state.comment}
                />
         </Form>
         </div>
         );
    }
}
 
export default CommentSection;