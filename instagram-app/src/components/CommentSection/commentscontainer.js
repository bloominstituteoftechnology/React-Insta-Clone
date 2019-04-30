import React from 'react';
import CommentsInput from './commentsinput';

import Comments from './comments';




function CommentsSection(props){
    console.log(props);
    return(
       
      <div className='user-comments'>
      {props.comments.map((a, b) => <Comments key={b} comment={a} />)}
      <div className='border'></div>
      <CommentsInput />
    </div>
            
           
         )}

        
    



export default CommentsSection;

