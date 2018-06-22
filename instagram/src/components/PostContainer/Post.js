import React from 'react';
import './PostContainer.css'
import styled from 'styled-components'

const PostHeader = styled.div`
  display:flex;
`

const StyledThumbnail = styled.div`
  width: 5%;
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin:2.5%
`
const StyledThumbImg = styled.img`
  border-radius: 25px;
`

const StyledUsername = styled.div`
  padding-top: 3%;
  font-size: 1rem;
`

const StyledLikes = styled.div`
  margin-left: 3.6%;
  margin-bottom: 2px;
`

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
  }

  onClickHeart = (e) => {
    if(e.target.classList.contains('far')){
      e.target.classList.remove('far')
      e.target.classList.add('fas', 'color-red')
      this.props.updateLikes(true,this.props.postIndex)
    }else {
      e.target.classList.remove('fas', 'color-red')
      e.target.classList.add('far')
      this.props.updateLikes(false,this.props.postIndex)
    }
  }

  render() { 
    return (
      <div>
        <PostHeader>
          <StyledThumbnail>
            <StyledThumbImg className="img-fluid" src={this.props.postObj.thumbnailUrl} alt=""/>
          </StyledThumbnail> 
          <StyledUsername>
            <span>{this.props.postObj.username}</span>
          </StyledUsername>
        </PostHeader>
        <div>
          <div>
            <img className="img-fluid" src={this.props.postObj.imageUrl} alt="" />
          </div>
          <div className="icons">
            <i className="far fa-heart" onClick={(e) => this.onClickHeart(e)}></i>
            <i className="far fa-comment"></i>
          </div> 
          <StyledLikes>
            {`${this.props.postObj.likes} likes`}
          </StyledLikes>
        </div>
      </div>
     )
  }
}
 
export default Post