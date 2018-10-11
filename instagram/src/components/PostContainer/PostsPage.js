import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = props => {
    return (
        <div className="loggedIn">
            <SearchBar logout={props.logout} searchText={props.searchText} />
            {props.data.map((item, idx) => 
                <PostContainer item={item} id={idx} />
            )}
        </div>
    );
}

export default PostsPage;