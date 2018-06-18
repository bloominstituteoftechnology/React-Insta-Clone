import React from 'react';
import './PostContainer.css';

const  PostContainer= props => {
        return(
                <div>{props.dummyData.map(item => {
		
		return( 
			
		<div>
		<div className={props.HeaderContainer}>
		<img className={props.HeaderImageStyle} src={item.thumbnailUrl} />
		<p>{item.username}</p>	
		</div>	

		<img className={props.PostImage} src={item.imageUrl} />
		</div>
		
		);
		})}

		</div>


	);
}




export default PostContainer;
