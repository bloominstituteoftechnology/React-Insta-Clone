import React from 'react';
//import './UserInfo.css'
import { UserInfoWrapper, UserThumbnail, Username } from '../../MyStyledComponents/MyComponents'

const UserInfo = props => {
    return ( 
        <UserInfoWrapper>
            <UserThumbnail src={props.thumbnailUrl} alt="user thumbnail"/>
            <Username>{props.username}</Username>
        </UserInfoWrapper>
    );
}
 
export default UserInfo;