import React from "react"
import "./head.css"

const SearchBar = ()=>{
    const style={
        marginBottom:"7%",
        display:"flex",
        width:"50%",
        justifyContent:"space-around",
        borderRadius:"10%"
    }
    return (
        <div className="head">
        
        
            <i class="instagram icon"></i>
            <div style={style}>
                         <h4 >Instagram</h4>
                        <input type="text" placeholder="Search" />
            </div>
        <div>
            <i class="add icon"></i>
            <i class="ok circle icon"></i>
            <i class="heart icon"></i>

        </div>
        
        </div>
    )
}

export default SearchBar;