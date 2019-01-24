import React from 'react';
import styled from 'styled-components';


/*
Passed as props from Post.js

likes = {this.state.data.likes}
incrementLikes = {this.incrementLikes}

*/
// Styles using 'styled-components'

const Icons = styled.div`
    display: flex;
    padding-bottom: 10px;
`
const Likes = styled.div`
    padding-bottom: 10px;
`


const LikeSection = props => {
    return(
        <div>
            <Icons>
                <img onClick={props.incrementLikes} src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
                <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
            </Icons>
            <Likes>
                <strong>{props.likes} likes</strong>
            </Likes>
        </div>
    )
}


export default LikeSection