import React from 'react';
import Navigation from '../components/Navigation';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = props => {
    return(
        <React.Fragment>
            <header className="App-header">
                <Navigation 
                    handlesChanges={props.handlesChanges} 
                    searchText={props.searchText}
                    searchData={props.searchData}
                    isSelected={props.isSelected}
                    hasBeenClicked={props.hasBeenClicked}
                    clearSearchText={props.clearSearchText}
                />
            </header>
            <PostContainer 
                data={props.searchData()}
                searchText={props.searchText}
                handlesChanges={props.handlesChanges} 
            />
        </React.Fragment>
    );
}

export default PostsPage;