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
            <div className="header-name">
                    <i className="instagram icon"></i> |
                    <h4 className="title" style={style} >{props.title}</h4> 
            </div>
            <div style={style}>
                    <input style={style} type="text" placeholder="Search" />
            </div>
        <div>
            <i className="add icon"></i>
            <i className="heart outline icon"></i>
            <i className="ok circle icon"></i>


        </div>
        <div className="line">
        </div>
        </div>
    )
}

export default SearchBar;


SearchBar.defaultProps = {
        title : "Instagram"
}