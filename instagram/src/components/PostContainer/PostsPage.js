import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
    return (
        <div>
            <header className="App-header">
            <h1 className="App-title">Insta-Clone!</h1>
            <SearchBar />
            </header>
            <div>
                {props.data.map((post, index) => 
                    <PostContainer postInfo={post} 
                                key={index}
                                commentKey={index}
                                addNewComment={this.addNewComment}
                                updateComment={this.updateComment} />
                )}
            </div>
 
        </div>

    );
}

export default PostsPage;