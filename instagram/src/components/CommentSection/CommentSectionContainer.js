import React from "react";
import PropType from 'prop-type';
import CommentSection from './CommentSection'

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments=[]
    }
  }

  componentDidMount() {
      this.setState({comments: props.comments})
  }

  render() {
    return <CommentSectionContainer comments='this.state.comments'>;
  }
}

CommentSectionContainer.propTypes = {
  comments: PropTypes.object,
};

export default CommentSectionContainer;
