import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid black;
    margin: 30px auto;
    width: 640px;

    h2 {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin: 0;

        img {
            height: 50px;
            border-radius: 50%;
            margin: 5px 30px 5px 10px;
        }

        p {
            font-size: 10px;
            color: gray;
            font-weight: normal;
            padding-left: 20px;
            align-self: flex-start;
        }
    }
    p {
        padding: 0 20px;
        cursor: pointer;
    }
`

// const PostContainer = (props) => {
//     return (
//         <Post className={`${props.thisPost.display ? 'displayed' : 'hidden'}`} >
//             <h2><img src={props.thisPost.thumbnailUrl}></img>{props.thisPost.username}<p>{props.thisPost.timestamp}</p></h2>
//             <img src={props.thisPost.imageUrl} />
            
//             <p>{props.thisPost.likes} likes</p>
//             <CommentSection thisPost={props.thisPost} postIndex={props.index} />
//         </Post>
//     );
// }

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }
    }

    componentDidMount() {
        this.setState({
            likes: this.props.thisPost.likes
        })
    }

    addLike = () => {
        this.setState({likes: this.state.likes+1})
    }

    render(){
        return (
        <Post className={`${this.props.thisPost.display ? 'displayed' : 'hidden'}`} >
        <h2><img src={this.props.thisPost.thumbnailUrl} alt={this.props.thisPost.thumbnailUrl} />{this.props.thisPost.username}<p>{this.props.thisPost.timestamp}</p></h2>
        <img src={this.props.thisPost.imageUrl} alt={this.props.thisPost.imageUrl} />
        
        <p onClick={this.addLike}>{this.state.likes} likes</p>
        <CommentSection thisPost={this.props.thisPost} postIndex={this.props.index} />
    </Post>
        )
    }
}


PostContainer.propTypes = {
    thisPost: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes:  PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default PostContainer;