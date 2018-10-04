import React from 'react'
import './Search.css';

export default (props) => {
	return (
		<div className='searchContainer'>
			<div className='logo'>
				<img src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
				<p>Instagram</p>
			</div>
				<input type='text' placeholder= 'Search'/>
			<div className='icons'>
				<img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
				<img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
				<img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='avatar'/>
			</div>
		</div>
	)
}
