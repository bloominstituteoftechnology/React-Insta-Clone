import React from "react"
import "./head.css"

const PostContainer = (props)=>{
    return (
        <div>
                <div>
                {props.data.map(data=>
                    
                    <div key={new Date()}>
                        <div className="picture">
                            <h4>{data.username}</h4>
                            <div>
                                <img className="thumb"  src={data.thumbnailUrl} alt="tumbnail"/>
                            </div>
                        </div>
                        <img src={data.imageUrl} alt="rdm" />
                        
                        <h6>{data.likes}</h6>
                        <h6>{props.timestap}</h6>
                    </div>
                )}
                </div>

            <div>
           
            </div>

        </div>

    )
}

export default PostContainer