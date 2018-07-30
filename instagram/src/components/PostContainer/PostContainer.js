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
                <img src={this.props.thumbNail} />
                <div>{this.props.userName}</div>
                </div>
                <img src={this.props.image} />
               <div className = "postIcons">
               <i class="far fa-heart"></i> <i class="far fa-comment"></i>
               </div>
               <h3>{this.props.likes} likes </h3>
            </div>

        );
    }

}

export default PostContainer; 