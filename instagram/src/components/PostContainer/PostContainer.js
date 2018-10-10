import React from 'react'
import './PostContainer.css'
import Post from './Post'


class PostContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      
    }
  }

  render() {
    return (
      <div className="PostContainer">
        {this.props.posts.map( (postData, i) => {
          return <Post key={i} postData={postData} />
        })}
      </div>
    )
  }
}

export default PostContainer;