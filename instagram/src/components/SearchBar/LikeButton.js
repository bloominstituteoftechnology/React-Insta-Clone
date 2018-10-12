import React, { Component } from 'react';
import LikeButt from '../../img/like.png';
import styled from 'styled-components';

const LikeIcon = styled.img`
    height: 25px;
`

class LikeButton extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts : [],
      }
    }

    render(){
        return (
            <button  onClick = {this.props.addLike}>
                <LikeIcon alt="''" src= {LikeButt} />
            </button>
    )
}
}
// I know this doesn't need to be a class component, but when I changed it to a functional component, the app broke so I'm leaving it.
export default LikeButton;