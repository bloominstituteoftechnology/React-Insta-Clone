import React from 'react';

 const Comment = ( props ) =>
{
  return (
    <div>
      <p>{ props.data.username} { props.data.text }</p>
    </div>
  )
}


class CommentSection extends React.Component
{
  render()
  {
    return(
      <div>
        {
          this.props.comments.map( ( element ) =>
          {
            return(
              <Comment data = { element } />
            )
          })
        }
      </div>
    )
  }
}

export default CommentSection;