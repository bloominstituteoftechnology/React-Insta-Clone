import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


const PostsPage = props => {
        return (
            <div className="App">
                <SearchBar changeHandler={props.filter} filterTarget={props.filterTarget} />
                <PostContainer
                    data={props.data}
                    likes={props.likes}
                    increment={props.increment}
                    
                />
            </div>
        );
    }

export default PostsPage;
