import React from 'react'
import './Search.css';
import {SearchContainer, Logo, Img, LogoImg, Input, Icons} from './styled'

export default (props) => {
	return (
		<SearchContainer>
			<Logo>
				<LogoImg src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
				<p>Instagram</p>
			</Logo>
				<Input onChange={props.search} type='text' placeholder= 'Search'/>
			<Icons>
				<Img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
				<Img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
				<Img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='avatar'/>
			</Icons>
		</SearchContainer>
	)
}
