import React from "react";
import CommentContainer from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentContainer/CommentContainer';
import './CommentSection.css'
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
      
      <div className="commment-section">
          {props.commentSection.map(propsInCSection => (
              <CommentContainer 
                  key ={propsInCSection.text}
                  propsInCC = {propsInCSection}
                  />
          ))}
      </div>
  );
};

CommentSection.propTypes = {
    commentSection: PropTypes.array.isRequired
}

export default CommentSection;