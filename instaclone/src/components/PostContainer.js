import React from "react"
import "./head.css"

const PostContainer = (props)=>{
    return (
        <div>
                <div className="compo-image">
                {props.data.map(data=>
                    
                    <div key={new Date()}>
                    <h6>{data.timestamp}</h6>

                        <div className="picture">
                            <h4>{data.username}</h4>
                            <div>
                                <img className="thumb"  src={data.thumbnailUrl} alt="tumbnail"/>
                            </div>
                        </div>
                        <img className="imageurl"src={data.imageUrl} alt="rdm" />
                        
                        <h6>{data.likes} Likes</h6>
                    </div>
                )}
                </div>

            <div>
           
            </div>

        </div>

    )
}

export default PostContainer