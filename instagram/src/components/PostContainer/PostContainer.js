import React from 'react';
import './PostContainer.css';

const  PostContainer= props => {
        return(
                <div>{props.dummyData.map(item => {
		
		return( 
			
		<div>	
		<img src={item.imageUrl} />
		</div>
		
		);
		})}

		</div>


	);
}




export default PostContainer;
