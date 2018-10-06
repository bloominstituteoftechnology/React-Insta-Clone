import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comment: this.props.comment
        }
    }




  addComment = (e) => {
    let temp = {
        username: 'Abi Franklin',
        text: e.target.previousSibling.value
    }

    this.setState({
        comment: [...this.state.comment, temp]
    })
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
          {this.state.comment.map(comment => (
              <div className="commentContainer">
                  <h2>{comment.username}</h2>
                  <p>{comment.text}</p>
             </div>
          ))}
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