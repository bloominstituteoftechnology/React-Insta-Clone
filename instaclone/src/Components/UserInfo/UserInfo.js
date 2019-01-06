import React from 'react';
import { UserInfoWrapper, UserThumbnail, Username } from '../../Styles/Reusables'

const UserInfo = props => {
    return ( 
        <UserInfoWrapper>
            <UserThumbnail src={props.thumbnailUrl} alt="user thumbnail"/>
            <Username>{props.username}</Username>
        </UserInfoWrapper>
    );
}
 
export default UserInfo;