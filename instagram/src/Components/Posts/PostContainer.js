import React from 'react'
import Card, { CardHeader } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import CommentsSection from './CommentSection'

const styles = {
  card: { maxWidth: 600, margin: 50 },
  avatar: { margin: 10 },
  image: { height: 600 }
}

const PostContainer = ({postData, index, classes}) => {
  const {
    username, 
    thumbnailUrl, 
    imageUrl, 
    likes,
    comments
  } = postData
  return (
    <Card className={classes.card} raised={true}>
      <CardHeader
        avatar={<Avatar
          alt="Adelle Charles"
          src={thumbnailUrl}
          className={classes.avatar}
        />}
        title={username}
      />
      <img className={classes.image} src={imageUrl} alt={username}/>
      <CommentsSection index={index} likes={likes} comments={comments}/>
    </Card> 
  )
}
export default withStyles(styles)(PostContainer)

/**
 * <Card style={{width: '40em'}}>
      <CardHeader title={username}/>
      <CardMedia         
      style={{height: '20em'}} image="../../../public/assets/sample.jpg"
      />
    </Card>
 */