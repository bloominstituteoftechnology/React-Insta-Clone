import React from 'react'
import Comment from '../CommentSection/Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const AddComment =styled.div`
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    padding:10px;
    
.dots{
    font-weight: bolder;
    font-size: 20px;
     
}

.commentForm{
    border:none;
}
`
class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            commentData: props.CommentArray,
            textInput: "",
        }
    }
inputHandler = (event) => {
    this.setState({
      textInput: event.target.value
       },
       console.log(this.state.textInput)
    )
}
addComment = (event) => {
     event.preventDefault();
     const comment ={
         username: 'newuser',
         text:this.state.textInput
     }
    this.setState({
            commentData: this.state.commentData.concat(comment)
    },
        console.log(this.state.textInput)
    )

}
        
    
    render() {
        // console.log(this.state)
        return (
            <div className="commentSection">
                <>
                    {this.state.commentData.map((obj, index) => {
                        return (

                            <Comment key={index} commentUsername={obj.username} commentText={obj.text} />
                            
                        );
                    })}
                </>
                <AddComment>
                    <form onSubmit={(event) => {  this.addComment(event) } }>
                        <input onChange={this.inputHandler} className="commentForm" type="text" placeholder="Add a comment..."  />
                    </form>
                    <div className='dots'><p>...</p></div>
                </AddComment>
            </div>
        );
    }
}
CommentSection.propTypes = {
    CommentArray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        }))
}
Comment.defaultProps = {
    commentUsername: 'no username supplied',
    commentText: 'no text supplied',
}
export default CommentSection