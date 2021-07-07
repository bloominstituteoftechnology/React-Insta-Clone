import React from 'react'; 
import PostContainer from './PostContainer'; 

const AllPostContainers = props => {
    return (
        <div>
    {props.data.map((user, index) =>  {
        return (<PostContainer 
          key = {index}
          usernameImg = {user.thumbnailUrl}
          username = {user.username}
          img = {user.imageUrl}
          likes = {user.likes}
          comments = {user.comments}
          timeStamp = {user.timestamp}
          clickLike = {this.increaseLikeHandler}
        />)
      })}
        </div>
    )
    
}
export default AllPostContainers