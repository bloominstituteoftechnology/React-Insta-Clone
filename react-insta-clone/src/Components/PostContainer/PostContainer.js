import React from 'react';
import propTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import "../PostContainer/PostContainer.css";
import PostSubComponent from "./PostSubComponent/PostSubComponent";

class PostContainer extends React.Component
{
  constructor( props )
  {
    super( props );
  }
  render()
  {
    return(
      <div className = "post-container">
        {
          this.props.objects.map( ( element ) =>
          {
            return(
              <PostSubComponent data = { element }/>
            )
          })
        }
      </div>
    )
  }
}

export default PostContainer;