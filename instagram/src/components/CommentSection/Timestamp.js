import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.div`
    display: flex;
    padding: 10px 15px;
    color: grey;
` 

 const Timestamp = props => {
        return(
            <StyledTime>{props.timestamp}</StyledTime>
        );
    }
export default Timestamp;