import React from 'react'
import PropTypes from 'prop-types'
import dummyData from '../../dummy-data';


class CommentSection extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            commentArray: props.commentInfo,
            commentInput: ''
        }  
      }

    

      changeHandler = event => {
        this.setState({[event.target.name]: event.target.value });
      }

      addNewComment = (event, index) => {
          console.log(this.state)
        event.preventDefault();
        if (this.state.commentInput === '') {
          return null
      }

      this.setState({
        commentArray: [
            ...this.state.commentArray,
            {
                username: 'jordan',
                text: this.state.commentInput
            }
        ],
        commentInput: ''

      })

    }
    
      render() {
        return (
        <div className="commentDiv">
            
                {this.state.commentArray.map((item, index) => {
                     return (
                        <div className="postedCommentContainer">
                     <h1 className="userName">{item.username}</h1>
                     <p className="commentText">{item.text}</p>
                     </div>
                     )})
                }
               
                <div className="newCommentDiv">
                        <form onSubmit={this.addNewComment}>
                        <input 
                        className="commentInputField" 
                        placeholder="Add a comment..."
                        type="text"
                        value={this.state.commentInput}
                        name="commentInput"
                        onChange={this.changeHandler}
                        
                        ></input>
                        <i className="fas fa-ellipsis-h"></i>
                        </form>
                </div>
        </div>
            
        )
      }
}
 



export default CommentSection;



CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}