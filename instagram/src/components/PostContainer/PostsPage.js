import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
    return (
        <div>
            <header className="App-header">
            <SearchBar updateSearch={props.updateSearch}
                       searchHandler={props.searchHandler}
                       search={props.search} />
            </header>
            <div>
                {props.data.map((post, index) => 
                    <PostContainer postInfo={post} 
                                key={index}
                                commentKey={index}
                                addNewComment={props.addNewComment}
                                updateComment={props.updateComment}
                                like={props.like}
                                index={index} />
                )}
            </div>
        </div>

    );
}

export default PostsPage;