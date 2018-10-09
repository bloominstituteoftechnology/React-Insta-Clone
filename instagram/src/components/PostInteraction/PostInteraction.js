import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../PostInteraction/postinteraction.css';

const PostInteraction = props => {
  const { likes } = props;
  return (
    <div className="postInteractions">
      <FontAwesomeIcon
        icon={['far', 'heart']}
        size="2x"
        className="interactionIcons"
      />
      <FontAwesomeIcon
        icon={['far', 'comment']}
        size="2x"
        className="interactionIcons"
      />
      <p className="likes">{likes} likes</p>
    </div>
  );
};

export default PostInteraction;
