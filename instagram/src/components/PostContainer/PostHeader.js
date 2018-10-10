import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';


export default class PostHeader extends React.Component {

  render () {
    return (
      <div className = 'header-container'>
        <img  className = 'headerIMG' src = {this.props.thumbNail} alt = 'headerIMG'/>
        <p className = 'userName'>{this.props.name}</p>

      </div>

    )
  }

}

PostHeader.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};



