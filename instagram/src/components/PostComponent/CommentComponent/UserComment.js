import React from 'react'

function UserComment (props){
    return (
        <div className="userComment">
            <div className="user">{props.username} </div>
            <p>{props.text}</p>
        </div>
    )
}

export default UserComment