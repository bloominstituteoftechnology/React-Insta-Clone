import React from "react";
import Posts from "./Posts.js"

export default (props) => {
    return (
        <div>
            {props.posts.map((postcontent, i) => {
                return <div>
                    <Posts key={postcontent.timestamp} posts={postcontent}/>
                </div>
            })}
        </div>
    )
}