import React, { Component } from 'react';
import './comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Likes
 extends Component {
    render() {
        return (
            <div className='likes'>
               <FontAwesomeIcon icon={["far", "heart"]} />{" "}
               <FontAwesomeIcon icon={["far", "comment"]} />
            </div>
        );
    }
}

export default Likes;
