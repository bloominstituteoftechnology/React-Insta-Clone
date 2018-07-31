import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Comments from './Comments';

class Card extends React.Component {
  state = {
    input: ''
  };

  bubbleRef = React.createRef();

  handleChange = input => {
    this.setState({ input });
  };

  render() {
    const {
      id,
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      liked,
      timestamp,
      comments,
      onAddComment,
      onToggleLike
    } = this.props;

    return (
      <section className="Card">
        <div className="Card__header">
          <img className="Card__thumbnail" src={thumbnailUrl} alt="Thumbnail" />
          <span className="Card__username">{username}</span>
        </div>
        <div className="Card__banner">
          <img className="Card__banner-img" src={imageUrl} />
        </div>
        <div className="Card__icons">
          <i
            className={`far fa-heart ${liked ? 'Card__icons--liked' : ''} `}
            onClick={() => onToggleLike(id, !liked)}
          />
          <i
            className="far fa-comment"
            onClick={() => this.bubbleRef.current.focus()}
          />
        </div>
        <div className="Card__likes">{likes} likes</div>

        <Comments {...{ timestamp, comments }} />

        <div className="Card__input-wrapper">
          <input
            ref={this.bubbleRef}
            onChange={e => this.handleChange(e.target.value)}
            value={this.state.input}
            className="Card__input"
            type="text"
            placeholder="Add a comment..."
            onKeyDown={e => {
              if (e.key === 'Enter') {
                onAddComment(id, this.state.input);
                this.setState({ input: '' });
              }
            }}
          />
          <i class="fas fa-ellipsis-h" />
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default Card;
