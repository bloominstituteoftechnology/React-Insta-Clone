import React from 'react';
import styled from "styled-components";

const IconContain = styled.div
` display: flex;
  flex-flow: row nowrap;
  border: 1px solid orange;
  padding-left: 0.7rem;
  margin-bottom: 0.2rem;`;

const Icon = styled.span
` font-size: 1.5rem;
  margin-right: 0.7rem;
  cursor: pointer;`;



const Like = props => {
  return [
    <div className='like'>
      <IconContain>
        <Icon onClick={props.likeCounter}><i className="fas fa-heart"></i></Icon>
        <Icon><i className="fas fa-comment"></i></Icon>
      </IconContain>
    </div>,
    <div className='like'>
      <IconContain>{props.likes}{'  Likes'}</IconContain>
    </div>
  ]
}

export default Like;
