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
                
               <div className = "postIcons">
               <i class="far fa-heart"></i> <i class="far fa-comment"></i>
               </div>
            </div>

        );
    }

}

export default PostContainer; 