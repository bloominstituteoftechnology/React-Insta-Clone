import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



 const Post = ( props ) =>
{

return( 
    <div className = "post">
      <p>{ props.data.username }</p>
      <img src = { props.data.thumbnailUrl }></img>
      <img src = { props.data.imageUrl }></img>
      <p>{ props.data.likes }</p>
      <CommentSection comments = { props.data.comments }/>
    </div>
  )
}

class PostContainer extends React.Component
{
  constructor( props )
  {
    super( props );
  }
  render()
  {
    return(
      <div>
        {
          this.props.objects.map( ( element ) =>
          {
            return(
              <Post data = { element }/>
            )
          })
        }
      </div>
    )
  }
}



 export default PostContainer; 