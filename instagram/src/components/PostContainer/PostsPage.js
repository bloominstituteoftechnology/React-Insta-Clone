import React from 'react';
import Navigation from '../Navigation/Navigation';
import PostContainer from '../PostContainer/PostContainer';
import { AppHeader } from './StyledPostsPage';

const PostsPage = props => {
    return(
        <React.Fragment>
            <AppHeader>
                <Navigation 
                    handlesChanges={props.handlesChanges} 
                    searchText={props.searchText}
                    searchData={props.searchData}
                    isSelected={props.isSelected}
                    hasBeenClicked={props.hasBeenClicked}
                    clearSearchText={props.clearSearchText}
                    logOut={props.logOut}
                />
            </AppHeader>
            <PostContainer 
                data={props.searchData()}
                searchText={props.searchText}
                handlesChanges={props.handlesChanges} 
            />
        </React.Fragment>
    );
}

export default PostsPage;