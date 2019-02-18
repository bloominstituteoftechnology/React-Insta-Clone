import React from "react"
import "./head.css"

const SearchBar = (props)=>{
    const style={
        marginBottom:"7%",
        display:"flex",
        width:"50%",
        justifyContent:"space-around",

    }
    return (
        <div className="head">
            <i className="instagram icon"></i>
            <div style={style}>
                         <h4 style={style} >{props.title}</h4>
                        <input style={style} type="text" placeholder="Search" />
            </div>
        <div>
            <i className="add icon"></i>
            <i className="ok circle icon"></i>
            <i className="heart icon"></i>

        </div>
        
        </div>
    )
}

export default SearchBar;