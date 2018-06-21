import React, { Component } from 'react';
import Comment from '../CommentSection/Comment'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledTimeStamp = styled.div`
  margin-left: 3.5%;
  margin-top: 1%
`

const StyledAddComment = styled.div`
  text-align: center;
  margin-top: 20px;
`

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      comment :''
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.addNewComment(e,this.props.postIndex)
      this.setState({
        comment:''
      })
    }

  }

  onChange = (e) =>{
    this.setState({
      comment:e.target.value
    })
  }

  render() { 
    return (
      <div>
        {this.props.commentsArr.map( (comments,index) => <Comment key={index} comments={comments}/>)}
        <StyledTimeStamp>{this.props.postTimeStamp}</StyledTimeStamp>
        <StyledAddComment>
          <input type="text" placeholder="Add Comment as guest" onKeyUp={this.onKeyUp} value={this.state.comment} onChange={(e) => this.onChange(e)}/>
        </StyledAddComment>
      </div>
     )
  }
}

CommentSection.propTypes = {
  commentsArr:PropTypes.array
}
export default CommentSection