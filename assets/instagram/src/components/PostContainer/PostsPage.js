import React from 'react';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    changeHandler = event => {
        event.preventDefault();
        // console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
      };

    render(){

        return(
            <div>
                        {/* <SearchBar
            usernameInfo = {this.state.dummyData}
            />
            <PostContainer
            postInfo = {this.state.dummyData}
            addNewComment = {this.addNewComment}
            newComment = {this.state.newComment}
            changeHandler = {this.changeHandler}
            />     */}
            </div>

        )
    }
}