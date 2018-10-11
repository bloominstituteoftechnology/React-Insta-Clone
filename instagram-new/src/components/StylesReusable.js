import React from 'react';
import styled from 'styled-components';

export const PostUserName = styled.p`
     font-weight: 700;
    font-size: .75rem;

    ${props => (props.comment ? `margin-right: .3rem;
                                font-weight: 600;` : null)}
`;