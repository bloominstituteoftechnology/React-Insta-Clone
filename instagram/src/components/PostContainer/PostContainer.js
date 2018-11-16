import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid lightgray;
    border-radius: 5px;
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
    .point {
        cursor: pointer;
    }
`

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            isLiked: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem(`likes${this.props.index}`) === null){
            this.setState({
                likes: this.props.thisPost.likes
            })
        }
        else {
            this.setState(JSON.parse(localStorage.getItem(`likes${this.props.index}`)));
        }

    }

    componentDidUpdate() {
        localStorage.setItem(`likes${this.props.index}`,JSON.stringify(this.state))
    }

    addLike = () => {
        if(!this.state.isLiked){
            this.setState({likes: this.state.likes+1, isLiked: true})
        }
        else{
            this.setState({likes: this.state.likes-1, isLiked: false})
        }
        
    }

    render(){
        return (
        <Post className={`${this.props.thisPost.display ? 'displayed' : 'hidden'}`} >
            <h2><img src={this.props.thisPost.thumbnailUrl} alt={this.props.thisPost.thumbnailUrl} />{this.props.thisPost.username}<p>{this.props.thisPost.timestamp}</p></h2>
            <img src={this.props.thisPost.imageUrl} alt={this.props.thisPost.imageUrl} />
            
            <p className={`point`} onClick={this.addLike}>
                <Icon.Heart fill={this.state.isLiked ? "red" : "none"} />{this.state.likes} likes
            </p>
            <CommentSection thisPost={this.props.thisPost} postIndex={this.props.index} userName={this.props.userName}/>
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