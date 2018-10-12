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

export const LoginInput = Styled.input`
    width:300px;
    height:30px;
`
export const LoginHeader = Styled.p`
    font-size:1.6rem;
`

export const Spacer = Styled.div`
    height:30px;
`
export const Spacer20 = Styled.div`
    height:20px;
`
export const Spacer10 = Styled.div`
    height:10px;
`
export const Button = Styled.button`
 height:35px;
 width:100px;   
 border-radius:3px;
`
export const LoginButton = Styled.button`
 height:35px;
 width:300px;   
 border-radius:3px;
 background-color:#007bff
 color:white;
 font-size:1.6rem;
`
