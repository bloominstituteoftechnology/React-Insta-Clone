import React from 'react';

import styled from 'styled-components';

const UserName=styled.div`
font-weight:bold
${props => (props.type === 'commentSection' ? `color:red;` : null)}
`;


export default UserName;