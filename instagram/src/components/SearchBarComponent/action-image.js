import React from 'react';
import './search-bar.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';

function Actions (props){
    return (
        <div className="action-buttons">
            <MaterialIcon icon="explore" inactive />
            <MaterialIcon icon="favorite_border" inactive />
            <MaterialIcon icon="person" inactive />
        </div>
    )
}

export default Actions