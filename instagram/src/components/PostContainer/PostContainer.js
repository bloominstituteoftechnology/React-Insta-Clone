import React from 'react';
 const Post = ( props ) =>
{
  return( 
    <div>
      <p>{ props.data.username }</p>
      <img src = { props.data.thumbnailUrl}></img>
      <p></p>
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