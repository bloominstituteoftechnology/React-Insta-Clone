import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    }




  addComment = (e) => {
    let temp = {
        username: 'Abi Franklin',
        text: e.target.previousSibling.value
    }

    this.props.comment.push(temp)
    this.forceUpdate();
    e.target.previousSibling.value=''
  }

  enterItem = (e) => {
    if (e.charCode === 13) {
        let temp = {
            username: 'Abi Franklin',
            text: e.target.value
        }
    
        this.props.comment.push(temp)
        this.forceUpdate();
      e.target.value = '';
  }
}

    render(){
    return (
        <div>
          {this.props.comment.map(comment => (
              <div className="commentContainer">
                  <h2>{comment.username}</h2>
                  <p>{comment.text}</p>
             </div>
          ))}
          <h3>{this.props.time}</h3>
          <div className="addComment">
            <input placeholder="Add a comment..." onKeyPress={this.enterItem}/>
            <button onClick={this.addComment}>...</button>
        </div>
        </div>
      );
    }
}

CommentSection.propTypes = { username: PropTypes.string.isRequired, text: PropTypes.string.isRequired, time: PropTypes.string.isRequired };


export default CommentSection