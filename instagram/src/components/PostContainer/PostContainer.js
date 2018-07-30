import React from 'react'; 
import './PostContainer.css';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props){
        super(props)
    }


    render() {

        return(
            <div>
                <div className = "postHeader">
                <img className ="thumbNail" src={this.props.thumbNail} />
                <div>{this.props.userName}</div>
                </div>
                <img src={this.props.image} />
               <div className = "postIcons">
               <i className="far fa-heart"></i> <i className="far fa-comment"></i>
               </div>
               <h3>{this.props.likes} likes </h3>
            </div>

        );
    }

}



PostContainer.propTypes = {
    userName: PropTypes.string,
    thumbNail: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number
}


export default PostContainer; 