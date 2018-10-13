import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const Wrapper = styled.div`
    width: 97%;
    margin: 0 1.5%; 
`
const LikesIcon = styled.i`
    margin: 10px 30px;
    margin-left: 0;
    cursor: pointer
    
    ${props => props.bool ? `color: red` : null}
    ${props =>props.className.includes('fa-comment') ? `transform: scaleX(-1); position: relative; z-index: -1` : null}
`

export const LikesSection = props =>    <Wrapper>
                                            <div>
                                                <LikesIcon bool={props.bool} className={props.bool ? "fas fa-heart fa-2x likes" : "far fa-heart fa-2x likes"} onClick={props.likeHandler}></LikesIcon>
                                                <LikesIcon className="far fa-comment fa-2x likes"></LikesIcon>
                                            </div>
                                            <strong>{props.likes} likes</strong>    
                                        </Wrapper>

LikesSection.propTypes = {
    likes: PropTypes.number,
    bool: PropTypes.bool
}

LikesSection.defaultProps = {
    likes: 0
}                      