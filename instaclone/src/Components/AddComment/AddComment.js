import React from 'react';

import {IoIosMore} from 'react-icons/io';
import { IconContext } from "react-icons";

const AddComment = () => {
    return ( 
        <div className="add-comment-container">
            <input type="text" placeholder="Add a comment..."/>
            <div>
                <IconContext.Provider value={{ verticalAlign: 'middle', size: '1.5rem', className: 'dots'}}>
                    <IoIosMore />
                </IconContext.Provider>
            </div>
        </div>
    );
}
 
export default AddComment;