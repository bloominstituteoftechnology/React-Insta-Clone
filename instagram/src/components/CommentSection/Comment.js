import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px 0;
`

const Username = styled.span`
    font-weight: bold;
`

const Comment = props =>{    
    return(
        <Container>         
            <Username>{props.name} </Username>  
            <span className = "comment">{props.comment}</span>            
        </Container>
    )         
}

export default Comment