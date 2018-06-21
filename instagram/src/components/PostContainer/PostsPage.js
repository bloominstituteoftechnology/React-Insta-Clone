import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';


const PostsPage = (props)=> {
    return (
        <div>
            <SearchBar />
            {props.state.data.map((i, index) => (
                <PostContainer 
                    key={index} 
                    index={index}
                    data={i} 
                    addComment={props.addNewComment}
                    likes = {index === 0 ?  null: index}
                    addLike={props.addNewLike}
                    deleteComment={props.deleteComment}
                />))}
        </div>
    )
}
export default PostsPage;