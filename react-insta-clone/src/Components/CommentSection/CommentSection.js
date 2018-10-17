import React from 'react';
import CommentSubComponent from './CommentSubComponent/CommentSubComponent'

class CommentSection extends React.Component
{
  // constructor( props )
  // {
  //   super( props );
  // }
  render()
  {
    return(
      <div>
        {
          this.props.comments.map( ( element ) =>
          {
            return(
              <CommentSubComponent data = { element } />
            )
          })
        }
      </div>
    )
  }
}

export default CommentSection;