import React from "react";
import CommentContainer from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentContainer/CommentContainer';
import './CommentSection.css'

const CommentSection = props => {
  return (
      
      <div class="commment-section">
          {props.commentSection.map(propsInCSection => (
              <CommentContainer 
                  key ={propsInCSection.text}
                  propsInCC = {propsInCSection}
                  />
          ))}
      </div>
  );
};



export default CommentSection;