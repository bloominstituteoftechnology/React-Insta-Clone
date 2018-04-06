import React from "react";

export const SearchBar = props =>{
    return(
        <div className={props.classMainDiv}>
        <div className={props.classInstaLogo}><i className={props.className}></i> <p>| Instagram</p></div> 
        <input className={props.searchClass} type="text" placeholder="search"/> 
        7
        <div className={props.classIconDiv}><i className={props.classCompass}></i><i className={props.classHeart}></i><i className={props.classUser}></i>



</div>


         </div>
    );
};