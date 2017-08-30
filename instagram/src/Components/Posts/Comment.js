import React from 'react'
import Typography from 'material-ui/Typography';

function Comment ({comment}) {
  const { username, text } = comment
  const style =  {
    marginLeft: '0.5em',
    marginRight: '0.5em',
  }
  return (
    <div style={style}>
      <Typography type="caption">{username}</Typography>
      <Typography type="body2" paragraph noWrap={true}>{text}</Typography>
    </div>
  )
}
export default Comment 
