import Styled from 'styled-components';

{/* <img alt='circle' className='action-icons' src={require('../../static/img/circle.png')}></img>
<img alt='like' className='action-icons action-heart' src={require('../../static/img/heart.png')}></img>
<img alt='person' onClick={props.logout} className='action-icons action-person' src={require('../../static/img/person.png')}></img> */}


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