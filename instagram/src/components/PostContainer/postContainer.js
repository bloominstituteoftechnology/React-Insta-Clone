import React from 'react'
import CommentSection from '../CommentSection/commentSection';
import like from './likeandcomment.PNG'
import './postContainer.css'
import styled from 'styled-components'

const LikeandcommentIcons = styled.img`
    padding-left: 1%;
`
const Likes = styled.p`
    padding-left: 2%;
`
const Image = styled.img`
    width: 99%;
    padding-left: .5%;
`
const Header = styled.h4`
    padding-left: 2%;
`
const HeaderIcon = styled.img`
    border-radius: 50%;
    width: 5%;
`
const ContainerDiv = styled.div`
    margin: 7% 0%;
    border: 1px solid lightgrey;
`
const MasterDivContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`

const PostContainer = props => {

    if(!props.data.length) {
        return <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    }

    return (
        <MasterDivContainer>
            {props.data.map(user => {
            return <ContainerDiv key={user.username}>


            <Header><HeaderIcon src={user.thumbnailUrl} alt='header thumbnail'/>{user.username}</Header>

                <Image src={user.imageUrl} alt='user post' />

                <LikeandcommentIcons onClick={props.increaseLike} className='likeandcommentIcons' src={like} alt='like button' />

                <Likes>Likes {props.count}</Likes>
                
                    <CommentSection 
                    text={user.comments.map(comments => {
                    return comments 
                    })} 
                    newComment={user.newComment}
                    changeHandler={props.changeHandler}
                    newInput={props.newInput}
                    />
            </ContainerDiv>
            })}
        </MasterDivContainer>
    )
}

export default PostContainer;


// const PostContainer = props => {
    //     return (
    //         <div>{props.data.map(username => {
    //             return username.username;
    //         })}</div>
    //     )
    // }


    //JSON.stringify(user.comments)


    // <CommentSection comments={props.data.map(user => {
    //     return JSON.stringify(user.comments); })} />

    //<CommentSection comments={JSON.stringify(user.comments)} />


    // text={user.comments.map(comments => {
    //     return `${comments.username}: ${comments.text}`
    // })} 

    // <CommentSection 
    // text={user.comments.map(comments => {
    //     return comments.text
    // })} 
    // username={user.comments.map(comments => {
    //     return comments.username
    // })} 
    // newComment={user.newComment}
    // changeHandler={user.changeHandler}
    // newInput={user.newInput}
    // />