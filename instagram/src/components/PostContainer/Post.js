import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';
import Bolded from '../Styles/Reusables';

const PostDiv = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 600px;
    font-size: 1.4rem;
    text-align: left;
`
const PostHeader = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`

const UserThumbnail = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`

const PostImage = styled.img`
    width: 100%;
    height: auto;
`

const PostContent = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: stretch;
`

const ContentRespond = styled.div`
    padding-top: 12px;
    padding-bottom: 7px;
`


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
        
    }

    componentDidMount() {
        this.setState({
            likes: this.props.post.likes,
        })
    }

    incrementLikes = (event) => {
        if (!event.target.classList.contains('fas')) {
            this.setState((prevState) => {
                return {
                    likes: prevState.likes + 1
                };
            })
        }
        else if (event.target.classList.contains('fas')) {
            this.setState((prevState) => {
                return {
                    likes: prevState.likes - 1
                }
            })
        }
        event.target.classList.toggle('fas');
    }

    render() { 
        return (
            <PostDiv>
                <PostHeader>
                    <UserThumbnail src={`${this.props.post.thumbnailUrl}`} alt="thumbnail"/>
                    <Bolded>{this.props.post.username}</Bolded>
                </PostHeader>
                <PostImage src={`${this.props.post.imageUrl}`} alt="main"/>
                <PostContent>
                    <ContentRespond>
                        <i onClick={this.incrementLikes} className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </ContentRespond>
                        <Bolded likes>{this.state.likes} likes</Bolded>
                        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
                </PostContent>
            </PostDiv>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

export default Post;