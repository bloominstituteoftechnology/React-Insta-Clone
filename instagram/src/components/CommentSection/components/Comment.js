import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newData: '',
        
        };
    }
    addComment = event => {
        event.preventDefault();
        this.setState({
          data: [
            ...this.state.comments,
            { comments: this.state.newData }
          ],
          newData: '',
        })
      }
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value})
      }
    render() {
        return(
        <div class="commentContainer">
        {this.state.comments.map((item, index) => {
            return (
                <div class="comment"
                key={index}>
                    <div class="commentUser">{item.username}</div>
                    <div class="commentText">{item.text}</div>
                </div>
            )
        })}
            <div class="timestamp">6 hours ago</div>
            <form class="addComment" onSubmit={this.addComment}>
                <input 
                type="text" 
                placeholder="Add a comment . . ."
                name="newData"
                value={this.newData}
                ></input>
            </form>
        </div>
        )}
}

Comment.propTypes = {
    input: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};
 
export default Comment;
