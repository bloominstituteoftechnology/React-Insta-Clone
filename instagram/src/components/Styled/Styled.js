import Styled from 'styled-components';


export const Image = Styled.img`
    height:24px;
    width: 24px;
    cursor: pointer;
    color:black;

    ${props => (props.marginL30?'margin-left:30px;':'')}
    ${props => (props.marginL20?'margin-left:20px;':'')}
`

export const CommentActions = Styled.span`
    color:grey;
    font-size:.8rem;
`