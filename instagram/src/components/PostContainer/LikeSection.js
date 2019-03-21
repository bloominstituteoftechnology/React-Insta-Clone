import React from 'react';
import classNames from 'classnames';

const STYLE_BASE = "like-section_";

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked
    }
  }

  likedHandler = () => {
    const { liked } = this.state;
    this.setState({
      liked: !liked
    })
  }

  render() {
    return [
      <div
        className={`${STYLE_BASE}likesContainer`}
        key="likes-icons-container"
      >
        <div className={`${STYLE_BASE}wrapper`}>
          <i
            className={classNames({
              [`fa fa-heart-o`]: !this.state.liked,
              [`fa fa-heart`]: this.state.liked
            })}
            aria-hidden={this.state.liked}
            style={this.state.liked ? { fontSize: 30, color: "red" } : { fontSize: 30 }}
            onClick={this.props.incrementLike}
            onMouseDown={this.likedHandler}
          />
        </div>
        <div className={`${STYLE_BASE}wrapper`}>
          <i className="fa fa-comment-o" aria-hidden={true} style={{ fontSize: 30 }} />
        </div>
      </div>,
      <div className={`${STYLE_BASE}likesContainer`} key="likes-container">
        <div className={`${STYLE_BASE}likesRow`}>{this.props.likes} likes</div>
      </div>
    ];
  }
};

export default LikeSection;