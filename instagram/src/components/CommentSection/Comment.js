import React from 'react'
import PropTypes from 'prop-types'

const Comment = props => {

  return (
    <div>
      <p>{props.username} says {props.text}</p>
    </div>
  )
}

Comment.propTypes = {

}

export default Comment
