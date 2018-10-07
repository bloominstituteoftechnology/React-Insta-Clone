import React from 'react';
import PropTypes from 'prop-types';


export default class PostFooter extends React.Component {

  render () {
    return (
      <div className = 'footer-container'>
        <div className = 'littleIcons'>
          <img className = 'heartIMG icons'  src = 'https://image.freepik.com/free-icon/heart-outline_318-32415.jpg' alt = 'heart'/>
          <img className = 'talkBubbleIMG icons'  src = 'https://cdn2.iconfinder.com/data/icons/round-speech-bubbles-outline/64/comment-bubble-outline-01-512.png' alt = 'talkBubble'/>
        </div>

        <p className = 'likesCount'> {this.props.likes} likes </p>

      </div>

    )
  }

}


PostFooter.propTypes = {
  likes: PropTypes.number.isRequired
};

