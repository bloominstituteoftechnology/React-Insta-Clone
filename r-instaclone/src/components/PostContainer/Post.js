import React from 'react'
import Comments from '../Comments';
import styled from 'styled-components';


const General = styled.div`
display: flex;
flex-direction:column;
// border: 2px solid green; 
width:500px;
margin-left:30%;
`;

const Img = styled.img`
order: -1;
border-radius: 100%;
height:20%;
width:15%;
padding: 10px;

`;

const UsernameItem = styled.div`
display: flex; 
position: absolute;
z-index; -1;
justify-content: flex-start; 

`;

const Imgs = styled.img`
width: 500px;
margin-top:60px;
`;

const PostImage = styled.div`

`;

const Icons = styled.div`
display: flex;
padding: 0 10px;

`;



const Likess = styled.div`
display:flex;

`;



function Post(props) {
    return (

        
        <General >
        

        <UsernameItem>
            <p>{props.info.username}</p>
            <Img src= {props.info.thumbnailUrl} className="thumbnail" alt="userthumbnail" />
        </UsernameItem>




        <PostImage>
        <Imgs src= {props.info.imageUrl} className="post-pic" alt="users-post" />
        </PostImage>




        <Icons>
        <i class="far fa-heart"></i> 
        
        <i class="far fa-comment"></i>
        </Icons>



        <Likess>
         <p>{props.info.likes} Likes </p>
        </Likess>
         

      

        {props.info.comments.map (comment => (
            <Comments key={comment.text} comment={comment} />
        ))}

</General>
        
            

    )}

    export default Post;