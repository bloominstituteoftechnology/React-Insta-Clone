import React from "react";
import PropTypes from "prop-types";
import CommentSection from './CommentSection';
import CommentIcons from './CommentIcons';
import CommentLikes from './CommentLikes';
import CommentFormContainer from './CommentFormContainer'

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        post={}
    }
  }

  componentDidMount() {
      this.setState({comments: this.props.post})
  }

  render() {
    return (
        <div className="comment-container">
            <CommentIcons />
            <CommentLikes likes={this.state.post.likes} />
            <CommentSection comments={this.state.post.comments} />
            <CommentFormContainer />
        </div>
        
    );
  }
}

CommentSectionContainer.propTypes = {
  comments: PropTypes.object,
};

export default CommentSectionContainer;
