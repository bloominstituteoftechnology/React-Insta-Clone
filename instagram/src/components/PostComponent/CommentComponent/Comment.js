import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react';
function Comment (props){
    return (
        <div className="userComment">
            <input type="text" placeholder="Add a comment"/>
            <MaterialIcon icon="person" inactive />
        </div>
    )
}

export default Comment