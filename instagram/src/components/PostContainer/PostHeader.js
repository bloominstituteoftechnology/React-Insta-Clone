import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const HeaderStyle = styled.div `
display: flex;
flex-direction: row ;
margin-top: 10px ;
`
const UserName = styled.div ` 
margin-left: 10px ;
`
const ImgStyle = styled.img `
border-radius: 50px;
height: 40px;
width: 40px;
margin-bottom: 10px ;

`
const PostHeader = (props) => {
    return(
       <>
       <HeaderStyle>
       <ImgStyle alt="" src={props.avatar} />
       <UserName>
           {props.username}
       </UserName>
       </HeaderStyle>
       </>
    )
}


export default PostHeader 