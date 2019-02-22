import React from "react"
import "./head.css"
import {SearchBarDiv,IconDiv,Horizontal} from "./../reusableComp/styles."
const SearchBar = (props)=>{
    const style={
        marginBottom:"7%",
        display:"flex",
        justifyContent:"space-around",
        fontSize :"1rem",
        fontWeight : "bold"
    }
    return (
    <div>
       <SearchBarDiv>
            <div className="header-name">
                    <i  className="instagram icon"></i> |
                    <h4 className="title" style={style} >{props.title}</h4> 
            </div>
            <div style={style}>
                    <input 
                    // onChange={props.searchHandler}
                    // value={props.searchInput}
                    // name="searchInput"
                     type="text" 
                    placeholder="Search" />
            </div>
            <IconDiv>
                <i className="add icon"></i>
                <i className="heart outline icon"></i>
                <i className="user outline icon"></i>
            </IconDiv>
       </SearchBarDiv>
       <Horizontal />
       </div>
    )
}

export default SearchBar;


SearchBar.defaultProps = {
        title : "Instagram"
}