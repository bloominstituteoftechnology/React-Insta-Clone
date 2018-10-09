import React from 'react'
import './PostContainer.css'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state ={

    }
  }


  render() {
    return (
      <div className="Post">
        <div className="name">{this.props.postData.username}</div> 
      
      </div>
    )
  }
}

export default Post;