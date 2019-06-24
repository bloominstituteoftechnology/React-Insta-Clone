import styled from 'styled-components';
import { Card, CardBody, CardSubtitle, Row } from 'reactstrap';

export const PostContainer = styled(Card)`
    margin: 30px 0;
`

export const PostContainers = styled.div`
    max-width: 604px;
    margin: 0 auto;
`

export const PostTopContent = styled(CardBody)`
    padding: 16px 17px;
    flex: none;
`

export const PostBottomContent = styled(CardBody)`
    padding: 8px 14px;
    flex: none;
`

export const ThumbnailImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 90px;
`

export const PostUsername = styled(CardSubtitle)`
    align-self: center;
    margin-left: 10px;
    font-size: 14px;
`

export const PostCommentSection = styled(CardBody)`
    padding: 0;
`

export const LikeImgs = styled.div`
    display: flex;
    align-items: center;
`

export const LikeHeart = styled.i`
    padding: 0 3px;
    font-size: 1.5rem;
    cursor: pointer;
`

export const LikeComment = styled.i`
    margin-left: 13px;
    font-size: 1.5rem;
    cursor: pointer;
`

export const Likes = styled.div`
    padding: 3px 3px;
    font-size: 15px;
    margin: 1px 0;
`

export const TimeCommented = styled.div`
    color: grey;
    font-size: 12px;
    padding: 1px 3px;
    border-bottom: 1px solid #DFDFDF;
    padding-bottom: 10px;
    margin-bottom: 10px;
`

export const StyledRow = styled(Row)`
    margin: 0;
`