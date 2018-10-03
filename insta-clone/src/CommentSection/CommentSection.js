import React from 'react'



const CommentSection = props => {

    return (
        <> {props.dummyData.map((data, index) =>
            <div key={index}>
                {data.username}

            </div>
        )}
       </>

    )
}


export default CommentSection