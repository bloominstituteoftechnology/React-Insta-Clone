import React from 'react';
import Post from './Post';




const PostWrapper = props => {
	  return (
		<div>	  
	  	<Post  dummyData ={props.dummyData}/>
	  	</div> 
	  );


};
export default PostWrapper;
