import styled from 'styled-components'

//this is a wrapper for the user thumbnail and username
export const UserInfoWrapper =  styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    margin-left:1.5rem;
`
//default style for the user thumbnail
export const UserThumbnail = styled.img`
    max-width:35px;
    max-height:35px;
    border-radius:50%;
`
// defaults style for username
export const Username = styled.p`
    font-weight: 750;
    margin: 0 .5rem;
`
export default { UserInfoWrapper, UserThumbnail, Username }
