import React from 'react';
import Styled from 'styled-components';


const NewPostBox = Styled.div`
width: 70%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin: 20px auto;
`;

const SubmitButton = Styled.button`
height: 20px;
`;



const NewPost = props =>{
    return (
        <NewPostBox>
            <input type='file'
            name='image'
            id='image'
            onChange={(e) => props.setImage(e.target.files)}/>

            <SubmitButton onClick={props.submitPost} >Post</SubmitButton>

        </NewPostBox>    
    )
}

export default NewPost;