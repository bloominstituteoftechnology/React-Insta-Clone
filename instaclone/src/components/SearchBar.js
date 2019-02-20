import React from "react"
import "./head.css"

const SearchBar = (props)=>{
    const style={
        marginBottom:"7%",
        display:"flex",
        width:"37%",
        justifyContent:"space-around",
    }
    return (
    <div>
        <div className="head">
            <div className="header-name">
                    <i  className="instagram icon"></i> |
                    <h4 className="title" style={style} >{props.title}</h4> 
            </div>
            <div style={style}>
                    <input 
                    // onChange={props.searchHandler}
                    // value={props.searchInput}
                    // name="searchInput"
                    style={style} type="text" 
                    placeholder="Search" />
            </div>
        <div>
            <i className="add icon"></i>
            <i className="heart outline icon"></i>
            <i className="user outline icon"></i>
        </div>
      
        </div>
        <hr style={{width:"100%",color:"black"}}/>
       </div>
    )
}

export default SearchBar;


SearchBar.defaultProps = {
        title : "Instagram"
}