import React from 'react';

const Comments = props =>{
    return(
        <div>
            {props.commentArray.map(item =>{
                return(
                    <div key={item.text}>
                        <div>
                            <h3>{item.username}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Comments