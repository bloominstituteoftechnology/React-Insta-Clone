import React from 'react'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'
import PropTypes from 'prop-types';


class LikeSection extends React.Component {
constructor(props){
 super(props)
 this.state = {
     likes: this.props.likes
 }
}
addLike = () => {
 let likes = this.state.likes + 1
 this.setState({
  likes: likes 
 })
}
 render(){
  return(
   <div>
    <span onClick={this.addLike}>
     <FontAwesomeIcon icon={faHeart} />
      {this.state.likes} likes
    </span>
   </div>
  )
 }
}

LikeSection.PropTypes = {
 likes: PropTypes.number.isRequired
}

export default LikeSection