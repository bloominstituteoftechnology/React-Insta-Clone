import React from "react";
import styled from 'styled-components';

const Likes = styled.p`
  font-weight: bold;
  margin: 0;
  padding-top: 5px;
`;

const ImageIcons = styled.img`
  margin-right: 3%;
`;

const ImageFlip = styled(ImageIcons)`
  transform: scaleX(-1);
`;



class InteractPost extends React.Component {

  heartClicked= event => {
    this.props.clickHeart(this.props.interactIndex);
  }

  render() {
    return (
      <div>
        <ImageIcons onClick={this.heartClicked} src={require('../../img/heart.png')} alt={'heart'}/>
        <ImageFlip src={require("../../img/speech-bubble.png")} alt={'bubble'}/>
        <Likes>{this.props.post.likes} likes</Likes>
      </div>
    )
  }
}

export default InteractPost;