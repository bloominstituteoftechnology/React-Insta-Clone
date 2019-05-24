import React from 'react';
import PropTypes from 'prop-types';
import { CommentActions } from '../Styled/Styled'
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
display: flex;
margin-top:9px;
margin-left:15px;
font-size:1.6rem;
`
const UserName = Styled.span`
    font-weight: bold;
`

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.more=''
        this.delete=''

        if(props.data.text.length > 90){
           this.more =' ...more' 
        }
        if(props.data.username === 'Frank-E-B')
        {
            this.delete = ' ...remove'
        }

    }
    render(){
        return (
            <div>
                <WrapperDiv>
                    <p>
                        <UserName>{this.props.data.username} </UserName>{this.props.data.text}
                        <CommentActions>{this.more}</CommentActions>
                        <CommentActions>{this.delete}</CommentActions>
                    </p>
                </WrapperDiv>
            </div>
        )
    }
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        text:PropTypes.string,
        username:PropTypes.string
    })
}

export default CommentSection;