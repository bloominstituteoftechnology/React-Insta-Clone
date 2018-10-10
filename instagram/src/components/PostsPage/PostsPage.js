import React, {Component} from "react";
import dummyData from '../../dummy-data.js';
import PostContainer from '../PostContainer';
import "./PostsPage.css";

class PostsPage extends Component {
    state = { /*state is a special object that re-renders the component every time a value held within state changes changes*/
        posts: this.props.posts, /*Establishing posts as a property of state*/
        newComment: '' /*Holds the new comment as it's created in state*/
    };

    componentWillReceiveProps(props) {
        this.setState({
            posts: props.posts
        });
    }

    /*Handle add comment*/
    handleAddComment = event => { /*An event handler that takes text entered in add comment bar and adds it into the comment array within the post object*/
        event.preventDefault(); /*By default a submit button tries to submit info and reload page, but I am preventing it from doing that*/
        const postIndex = event.target.dataset.postnumber; /*Saving the index that is the unique number of the post that is being commented on so that the comment is not saved to all posts*/
        let postsCopy = this.state.posts; /*Saved entire posts array to postsCopy*/
        postsCopy[postIndex].comments.push({ /*Finding the item in the array at the proper index, and then pushing a new comment into it's comment array*/
            username: "ult1m4t3_H4CK3RR", /*hard-coded username*/
            text: this.state.newComment /*Setting the text of the new comment to the comment text that's been saved in the state*/
        });
        this.setState({ posts: postsCopy }, () => { console.log(this.state.posts) }); /*Sets the  post array on state to be equal to the copy I edited*/
    };
    handleInput = event => {
        this.setState({ newComment: event.target.value }); /*Every single time anything is typed in the comment box, the value for the new comment is updated in the state to reflect that.*/
    };

    /*Adding and removing likes*/
    handleAddClickLike = event => { /*Function adding like when inactive heart is clicked*/
        const inactiveHeart = document.getElementsByClassName('icon-heart'); /*Selecting the gray heart icon*/
        const activeHeart = document.getElementsByClassName('icon-heart-liked'); /*Selecting the red heart icon*/
        const postIndex = event.target.dataset.postnumber; /*Setting the current post index to be the specific unique post of the event's target*/
        inactiveHeart[postIndex].classList.toggle('display-none'); /*Making the gray heart dissapear when clicked on*/
        activeHeart[postIndex].classList.toggle('display-none'); /*Making the red heart appear when the gray heart dissapears*/
        let postsCopy = this.state.posts; /*Making a copy of the posts array so it's easier to edit*/
        postsCopy[postIndex].likes++; /*Incrementing the number of likes up when like button is clicked*/
        this.setState({ posts: postsCopy }); /*Sets the actual version of posts equal to the copy that was edited*/
    };
    handleRemoveClickLike = event => { /*Function removing like and inactivating heart icon*/
        const inactiveHeart = document.getElementsByClassName('icon-heart');
        const activeHeart = document.getElementsByClassName('icon-heart-liked');
        const postIndex = event.target.dataset.postnumber;
        activeHeart[postIndex].classList.toggle('display-none');
        inactiveHeart[postIndex].classList.toggle('display-none');
        let postsCopy = this.state.posts;
        postsCopy[postIndex].likes--;
        this.setState({ posts: postsCopy });
    };

    /*Rendering the page*/
    render() {
        return (
            <div>
                {this.state.posts.map((post, index) => {
                    {/*Mapping over each post object in dummy data and ...*/ }
                    return <PostContainer /*Creating a PostContainer component that passes each value to PostContainer as props. First passes handleAddComment on this component.*/
                        handleRemoveClickLike={this.handleRemoveClickLike}
                        handleAddClickLike={this.handleAddClickLike} /*Passing the click like funcion down to the comments section to attach to the like button*/
                        handleInput={this.handleInput} /*Passing the handleImput function to PostContainer*/
                        handleAddComment={this.handleAddComment}  /*Passing the handleAddComment function to PostContainer*/
                        username={post.username}
                        thumbnailUrl={post.thumbnailUrl}
                        imageUrl={post.imageUrl}
                        likes={post.likes}
                        timestamp={post.timestamp}
                        comments={post.comments}
                        key={index} /*Have key:index so it doesnt yell at me*/
                        postNumber={index} /> /*Passing postNumber, which is the index of the array to PostContainer*/
                })} {/*end post creation map*/}
            </div>
        );
    }
}

export default PostsPage;