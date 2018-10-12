import React, { Component } from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexColumnContainer from '../Styles/Reusables/FlexColumnContainer'

//Styles
const CommentInput = styled.input `
    border: 2px solid #ecf0f1;
    padding: 20px 0;
    width: 100%;
`;

const CommentContainer = styled.section `
    margin-left: 20px;
`;

class CommentSection extends Component {
    render() {
        return (
            <>
              <CommentContainer>
                  <FlexColumnContainer>
                      <FontAwesomeIcon className='icons' icon='heart' onClick={() => props.newLike(props.index)} />
                      <FontAwesomeIcon className='icons comment' icon='comment' />
                  </FlexColumnContainer>
                  <div>
                      <p>{props.likes} likes</p>
                  </div>
                  {props.comments.map(comment => (
                      <div key={comment.id}>
                          <Comment comment={comment} />
                      </div>
                  ))}
              </CommentContainer>
              <CommentInput
                  type='text' 
                  placeholder='Comment' 
                  value={props.commentInput} 
                  onChange={props.handleSubmit} 
                  onKeyPress={(e) => props.addNewComment(props.index, e)}
              />   
            </>  
          );
    }
}

//Test
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    likes: PropTypes.number
};

export default CommentSection;