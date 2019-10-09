import React from 'react';
import styled from 'styled-components';

const TimestampDiv = styled.div`
    color: darkgrey;
    margin: 15px 0;
    padding: 15px 0;
    border-bottom: 1px solid darkgrey;
    width: 100%;
`;

const Timestamp = props => {
    return(
        <TimestampDiv>{props.timestamp}</TimestampDiv>
    );
}

export default Timestamp;