import React from 'react';
import styled from '../../../node_modules/styled-components';

const IconsContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Icon = styled.i`
    color: gray
`

export default () =>    <IconsContainer>
                            <Icon className="far fa-compass fa-2x"></Icon>
                            <Icon className="far fa-heart fa-2x"></Icon>
                            <Icon className="far fa-user fa-2x"></Icon>
                        </IconsContainer>