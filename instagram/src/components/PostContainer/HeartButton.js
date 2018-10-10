import React from 'react';
import { EventEmitter } from '../../events.js';

const HeartButton = ({index, liked}) => (
  <div className='heart-container'>
    <svg
      onClick={(event) => EventEmitter.dispatch('likePost', event)}
      className='heart-button'
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <path 
      id={index} 
      fill={liked ? 'red' : 'white'}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>
)

export default HeartButton;