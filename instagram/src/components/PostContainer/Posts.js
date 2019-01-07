import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './likes';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const PostHeader = styled.div`
    display:flex;
    justify-content: flex-start;
    width:45%;
    border:.5px solid #fafafa;
`;

const MainImage = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
`;

const PostContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border:1px solid #dadada;
    width:45%;
    margin-bottom:50px;
`;

const CommentsContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    width:100%;
    margin-top:20px;
    margin-bottom: 20px;
`;
const Image = styled.img`

`;

const Username = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    width: 50px;
    height:50px;
    margin-left: 10px;
    margin-top:5px;
`;

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes,
            comments: props.post.comments
        }
    }

    incrementLike = () => {
        let like = this.state.likes + 1;
        this.setState({ likes: like })
        console.log(this.state.likes);
    };
    componentDidMount(){
        const likeAmount = this.state.likes;
        if (localStorage.getItem(likeAmount)){
            this.setState({
                likes: JSON.parse(localStorage.getItem(this.state.likes))
            })
        }else{
            this.setLikes();
        }
    }

    componentWillUnmount(){
        this.setLikes();
    }

    setLikes = () =>{
        localStorage.setItem(
            this.state.likes,
            JSON.stringify(this.state.likes)
        )
    }
    commentHandler = e =>{
        this.setState({comment: e.target.value})
    }

    setComments = () =>{
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {text: this.state.comment, username: '@landoooooo'};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
        setTimeout(() => {
            this.setComments();
        }, 500)
    };
    render(){
        return(
            <Container>
                <PostHeader>
                    <ProfileContainer>
                        <Image className="profile-pic" src={this.props.post.thumbnailUrl} alt="logo"/>
                    </ProfileContainer>
                    <Username>
                        {this.props.post.username}
                    </Username>
                </PostHeader>
                <MainImage>
                    <Image src={this.props.post.imageUrl} alt="post"/>
                </MainImage>
                <PostContent>
                    <Likes likes={this.state.likes} incrementLikes={this.incrementLike}/>
                    <CommentsContainer>
                        <CommentSection postId={this.props.post.imageUrl} comments={this.props.post.comments} />
                    </CommentsContainer>
                </PostContent>
            </Container>
        );
    }
}

export default Posts;
