import React from 'react';
import Comm from './CommentSection.js';

const Gram = (props) => {
  console.log("Props", props);
    return <div>{props.full.map(p => <div key={p.username} className="cont"><img className ="thumbnail" style={{height:35}} alt="dont care"src ={p.thumbnailUrl} /> {p.username} <div><img className= "mainImg" src={p.imageUrl} alt="why"/></div><div><img className="icon" style={{height: 35, width: 40, paddingRight:30}} alt="who cares" onClick="" src="https://image.flaticon.com/icons/svg/149/149217.svg" /><img style={{height: 35, width: 40}} className="icon" alt="useless info" src="https://image.flaticon.com/icons/svg/25/25663.svg" /></div><div className="likes"><b> {p.likes} likes </b></div>
 <Comm comments={p.comments} />
<div>{p.timestamp}</div>
<input
        type="text"
        className="input1"
        name="bob"
        placeholder="Add a Comment"
        style={{marginTop: 20, height: 35, textAlign: 'center'}} 
        />
        <button className="butt" style={{height: 41}} >...</button>
    </div>)}</div>
  }
  export default Gram;