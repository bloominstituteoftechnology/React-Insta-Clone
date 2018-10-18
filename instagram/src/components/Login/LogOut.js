import React from 'react';
import styled from 'styled-components';

const LogoutButton = styled.button`
    padding: 0 20px;
`;



const LogOut = () => {
    return ( <div className='logOut'>
        <LogoutButton>Logout</LogoutButton>
    </div> );
}
 
export default LogOut;