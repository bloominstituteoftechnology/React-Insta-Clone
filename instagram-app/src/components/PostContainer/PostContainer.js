import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

class PostContainer extends React.Component {
    constructor(props){
     super(props);
      
    }


    render(){
    return ( this.props.post.map( (myPost) => (
        <div key={myPost.id}>
          <img src={myPost.thumbnailUrl} alt='user' />
          <p>{myPost.username}</p>
          <img src={myPost.imageUrl} alt ='post' />
          <p>{myPost.likes} likes</p>
        <CommentSection comment={myPost.comments}/>
        <p>{myPost.timestamp}</p>
        <input type='text' name='comment' placeholder='Add Comment..'/>
        </div>
    ))

    )
        
}

}
///// Here are my propTypes /////

PostContainer.propTypes ={
  post: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
  }))

}


export default PostContainer