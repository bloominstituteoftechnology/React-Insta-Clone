import React from 'react';
import styled from 'styled-components';


const PostContainer = styled.div`
width: 100%;
max-width: 600px;
// border: solid 1px silver;
background: lavender;
margin-bottom: 5%;

${props => (props.type === 'mainContainer' ? `border: solid 1px silver;`: null)}
`

export default PostContainer;