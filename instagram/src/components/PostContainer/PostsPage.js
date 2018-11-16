import React from 'react';
import Navigation from '../Navigation/Navigation';
import PostContainer from '../PostContainer/PostContainer';
import styled from 'styled-components';


const AppHeader = styled.div`
    max-width: 122.3rem;
    display: flex;
    justify-content: space-between;
    font-size: 4.5rem;
    margin: 25px auto;
`


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