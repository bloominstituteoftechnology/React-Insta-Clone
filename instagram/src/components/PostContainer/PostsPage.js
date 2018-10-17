import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';

const PostPage = (props) => {
        return(
            <div>
            {props.data.map(item => 
            
            <PostHeader key={item.username}
            
            avatar={item.imageUrl} 

            username={item.username}


                
            /> )};

            {props.data.map(item => <Post key={item.username} comments={item.comments} />)};

            {props.data.map(item => <LikeSection likes={item.likes} />)}
                
            </div>
        )
}

export default PostPage 