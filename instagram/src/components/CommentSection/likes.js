import React, { Component } from 'react';
import './comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Likes
 extends Component {
    render() {
        return (
            <div className='likes'>
               <FontAwesomeIcon className="fontawesome" icon={["far", "heart"]} />{" "}{" "}
               <FontAwesomeIcon className="fontawesome" icon={["far", "comment"]} />
            </div>
        );
    }
}

export default Likes;
