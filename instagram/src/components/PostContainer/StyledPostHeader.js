import styled from 'styled-components';

const PostHeaderDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin: 13px 18px;

    p {
        font-weight: bold; 
    }
`

const Avatar= styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 10px;
`

export { PostHeaderDiv, Avatar };