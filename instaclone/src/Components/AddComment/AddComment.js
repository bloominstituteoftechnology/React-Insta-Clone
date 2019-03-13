import React from 'react';

import {IoIosMore} from 'react-icons/io';
import { IconContext } from "react-icons";

class AddComment extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            commentText: ""
        }
    }
    
    render(){
        return ( 
            <form action="submit" className="add-comment-container" onSubmit={this.props.addNewCommment}>
                <input type="text" 
                    placeholder="Add a comment..." 
                    onChange={this.props.changeHandler} 
                    name="commentText" 
                    value={this.props.commentText}
                />
                <div>
                    <IconContext.Provider value={{ verticalAlign: 'middle', size: '1.5rem', className: 'dots'}}>
                        <IoIosMore />
                    </IconContext.Provider>
                </div>
            </form>
        );
    }
}
 
export default AddComment;