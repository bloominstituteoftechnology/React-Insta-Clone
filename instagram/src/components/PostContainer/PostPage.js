import React from 'react';
import PostContainer from '../PostContainer/Post';

const PostsPage = (props) => {
    return (
        <div>
            {props.data.map((user,index) => {
                if (!user.username.toLowerCase().includes(props.searchInput.toLowerCase())){
                  return;
                }
                return <PostContainer 
                          onSubmitHandler={this.commentSubmitHandler} 
                          index={index} 
                          onChangeHandler={this.commentChangeHandler} 
                          key={`user${index}`} 
                          userData = {user}
                          commentValue={props.newComment} />
              })}
        </div>
    )
}

export default PostsPage;