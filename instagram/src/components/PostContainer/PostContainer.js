import React, { Component } from 'react'
import { Card } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'

class PostContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: props.posts.likes
    }
  }

  handleLikes = (e, index) => {
    let likes = this.state.likes
    let result = e.target.classList.contains('heart-red')
    if (result) {
      this.setState({
        likes: likes - 1
      })
    } else {
      this.setState({
        likes: likes + 1
      })
    }
  }

  render () {
    return (
      <div className='Post-Container'>
        <Card key={this.props.posts.username + this.props.index}>
          <div className='top-container'>
            <img
              src={this.props.posts.thumbnailUrl}
              alt='profile-pic'
              className='rounded-circle'
              id='thumbnail'
            />
            <span className='username'>
              <strong>{this.props.posts.username}</strong>
            </span>
          </div>
          <img
            width='100%'
            src={this.props.posts.imageUrl}
            alt='Card cap'
            className='img-fluid'
          />
          <div className='post-cta'>
            <div className='icons'>
              <div className='heart-icon'>
                <i
                  className='far fa-heart fa-lg'
                  onClick={(e) => {
                    this.handleLikes(e, this.index)
                    e.target.classList.toggle('heart-red')
                  }}
                />
              </div>
              <div className='comment-icon'>
                <i className='far fa-comment fa-lg' />
              </div>
            </div>

            <span>
              <strong>{this.state.likes} likes</strong>
            </span>
            <CommentSection
              comments={this.props.posts.comments}
              keyId={this.props.posts.imageUrl}
              timeStamp={this.props.posts.timestamp}
            />
          </div>
        </Card>
      </div>
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}
export default PostContainer

// import React from 'react'
// import { Card } from 'reactstrap'
// import CommentSection from '../CommentSection/CommentSection'
// import './PostContainer.css'
// import PropTypes from 'prop-types'

// const PostContainer = (props) => {
//   return (
//     <div className='Post-Container'>
//       <Card key={props.posts.username + props.index}>
//         <div className='top-container'>
//           <img
//             src={props.posts.thumbnailUrl}
//             alt='profile-pic'
//             className='rounded-circle'
//             id='thumbnail'
//           />
//           <span className='username'>
//             <strong>{props.posts.username}</strong>
//           </span>
//         </div>
//         <img
//           width='100%'
//           src={props.posts.imageUrl}
//           alt='Card cap'
//           className='img-fluid'
//         />
//         <div className='post-cta'>
//           <div className='icons'>
//             <div className='heart-icon'>
//               <i className='far fa-heart fa-lg' />
//             </div>
//             <div className='comment-icon'>
//               <i className='far fa-comment fa-lg' />
//             </div>
//           </div>

//           <span>
//             <strong>{props.posts.likes} likes</strong>
//           </span>
//           <CommentSection comments={props.posts.comments} posts={props.posts} />
//         </div>
//       </Card>
//     </div>
//   )
// }

// PostContainer.propTypes = {
//   post: PropTypes.shape({
//     username: PropTypes.string,
//     thumbnailUrl: PropTypes.string,
//     imageUrl: PropTypes.string,
//     likes: PropTypes.number,
//     timestamp: PropTypes.string,
//     comments: PropTypes.arrayOf(PropTypes.object)
//   })
// }
// export default PostContainer
