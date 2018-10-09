import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
}) => (
  <div>
    <img src={thumbnailUrl} alt="user thumbnail" />
    <p>{username}</p>
    <img src={imageUrl} alt="post" />
    <p>Likes: {likes}</p>
    <CommentSection comments={comments} />
    <p>{timestamp}</p>
  </div>
)

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer

/*

  {
    username: 'philzcoffee',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg',

    imageUrl:
      'https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg',
    likes: 400,
    timestamp: 'July 17th 2017, 12:42:40 pm',
    comments: [
      {
        username: 'philzcoffee',
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        username: 'biancasaurus',
        text: 'Looks delicious!'
      },
      {
        username: 'martinseludo',
        text: "Can't wait to try it!"
      }
    ]
  },

  */
