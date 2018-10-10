import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {

    render() {

        return (
            <div className="App">
                <SearchBar searchInput={this.props.searchInput} searchHandler={this.props.searchHandler} filter={this.props.filter} reset={this.props.reset} />
                <>
                    {this.props.allUserData.map(obj => {
                        return (

                            <PostContainer key={obj.timestamp} InstaData={obj} CommentArray={obj.comments} />

                        );
                    })}
                </>


            </div>
        );
    }
}
export default PostsPage