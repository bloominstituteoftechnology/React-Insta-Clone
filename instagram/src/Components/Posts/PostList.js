import React from 'react'
import Grid from 'material-ui/Grid';

import PostContainer from './PostContainer'

function PostList({postData, onScroll}) {
  return (
    <Grid  
      container 
      direction="row" 
      justify="center" 
      style={{backgroundColor: '#e5e5e5', marginTop: '5em'}}
      onScroll={onScroll}
    >
      <Grid item>
        <div style={{maxWidth: '50em'}}>
          {postData.map((post, index) => (
            <PostContainer key={index} index={index} postData={post} />
          ))}
        </div>
      </Grid>
    </Grid>
  )
}
export default PostList
