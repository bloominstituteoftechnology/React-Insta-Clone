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
          comments: [
            ...this.state.comments,
                { username: "me",
                text: this.state.newData }
          ],
          newData: '',
        })
      }
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value})
      }
    render() {
        return(
        <div className="commentContainer">
        {this.state.comments.map((item, index) => {
            return (
                <div className="comment"
                key={index}>
                    <div className="commentUser">{item.username}</div>
                    <div className="commentText">{item.text}</div>
                </div>
            )
        })}
            <div className="timestamp">6 hours ago</div>
            <form className="addComment" onSubmit={this.addComment}>
                <input 
                type="text" 
                placeholder="Add a comment . . ."
                name="newData"
                onChange={this.changeHandler}
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
