import React from 'react'


const Comment = props => {

    return (
        <div className="section comment">
        {props.user} {''}
        {props.comments}
        </div>
        
    )
}


export default Comment