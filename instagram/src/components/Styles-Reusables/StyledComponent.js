import React from 'react';

import styled from 'styled-components';

const Username = styled.div`
    font-size: 14px;
    font-weight: ${props => props.fontWeight || "400"};
`;
export default Username;