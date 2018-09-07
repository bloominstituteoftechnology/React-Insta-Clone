import React from 'react';
import styled from 'styled-components';

const TimestampContainer = styled.div`
    display: flex;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 20px;
`;

function Timestamp(props) {
    return(
        <TimestampContainer>
            {props.timestamp}
        </TimestampContainer>
    )
}

export default Timestamp;