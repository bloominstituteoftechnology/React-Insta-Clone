import React from 'react';

const Icons = props => {
  return (
    <div className="icons">
      <div className="icons-small">
        <i className="far fa-heart fa-2x" onClick={props.increment}></i>
        <i className="far fa-comment fa-2x"></i>
      </div>
    </div>
  )
}

export default Icons;