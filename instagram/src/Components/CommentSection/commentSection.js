import React from 'react';
import './commentSection.css';




const CommentSection = (props) =>{
    // console.log(props.commentProps);
    let commentators1 = props.commentProps.map(p => p.comments);
    //  console.log('p',commentators1[0]);////////array of 3 objects 
     console.log (commentators1[0][0].username)
     
     
     
    //  let bill = {};
    //      bill =  user1comm[0];
    //     console.log(bill);
    //     // console.log(bill.username);
    
    //  let comm = user1comm.map((p,i) => p[i]);
    
    //  console.log(comm);
        
    

      
  
     return (
            <div className="CommentSection">
             {/* {commentators1.comments.map(p => {
                 console.log("p",p);
                 return <div>{p.username + p.text}</div>})} */}
            </div>
    )
}

export default CommentSection;