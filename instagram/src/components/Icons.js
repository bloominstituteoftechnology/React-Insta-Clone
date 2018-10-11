import React from 'react';
import styled from 'styled-components';


const IconsWrapper = styled.div`
    width: 80%;
    margin: 10px 75px;
    display: flex;
`;
const IconsSmall = styled.div`
    width: 13%;
    display: flex;
    justify-content: space-between;
`;

const Icons = (props) => {
    return (
        <IconsWrapper>
            <IconsSmall>
                <i className="fa fa-heart fa-2x" onClick={props.increment} target={props.index} />
                <i className="fa fa-comment fa-2x" />
            </IconsSmall>
        </IconsWrapper>
    );
};

export default Icons;
