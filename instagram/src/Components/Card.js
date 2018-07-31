import React from 'react';
import './Card.css';
import Comments from './Comments';

class Card extends React.Component {
  state = {
    input: ''
  };

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
      timestamp,
      comments,
      onAddComment
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
          <i className="far fa-heart" />
          <i className="far fa-comment" />
        </div>
        <div className="Card__likes">{likes} likes</div>
        <Comments {...{ timestamp, comments }} />
        <div className="Card__input-wrapper">
          <input
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

export default Card;
