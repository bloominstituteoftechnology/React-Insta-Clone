import React from 'react';
import PropTypes from 'prop-types';
import { PHeader } from './../Styled/styled';

class PostHeader extends React.Component {
  render() {
    return (
      <PHeader>
        <img src={this.props.headerImage} />
        <p>{this.props.name}</p>
      </PHeader>
    );
  }
}

PostHeader.propTypes = {
  headerImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PostHeader;
