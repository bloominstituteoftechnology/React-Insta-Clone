import React from 'react'
import styled from 'styled-components'

const VerticalLine = styled.div`
	border-left: 1px solid #000;
	height: 4rem;
	padding-right: 1.5rem;
`

const InstagramLogo = styled.div`
	img {
		display: inline-block;
		height: 2.4rem;
		padding-top: 0.4rem;
		padding-right: 1rem;
	}
`

const InstagramIcon = styled.div`
	font-size: 2.5rem;
	padding-right: 1.5rem;

	.insta-icon {
		display: inline-block;
	}
`
const SearchBarHeader = styled.header`
	width: 99%;
	align-items: center;
	display: flex;
	margin: 2rem auto;
	padding: 1rem;
	border-bottom: 1px solid #dddddd;
`

const InputWrapper = styled.div`
	display: inline-flex;
	flex: 1 1 30rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	max-width: 28rem;
	margin-left: auto;

	.search-box {
		padding: 0.8rem 0.8rem 0.8rem 0;
		flex: 1;
		border: 0;
		font-size: 1.4rem;
		background-color: #dddddd;
	}

	input[type='text'] {
		padding: 6px;
		font-size: 17px;
		border: none;
	}

	.search-button {
		${'' /* padding: 0.5rem;
		font-size: 1.8rem;
		position: absolute;
		left: 2rem;
		top: 0.5rem; */} background: #ddd;
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
		display: block;
		text-align: left;
		margin: 0;
		padding: 1rem;
	}
`
const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 12rem;
	padding-left: 1rem;
	margin-left: auto;
	font-size: 2.5rem;

	.icons {
		padding-right: 1rem;
	}
`
const searchbar = props => {
	return (
		<SearchBarHeader>
			<InstagramIcon>
				<i className="insta-icon" class="fab fa-instagram" />
			</InstagramIcon>
			<VerticalLine className="vertical-line" />
			<InstagramLogo>
				<img
					className="instagram-logo"
					src={require('../../instagram-seeklogo.com.svg')}
					alt=""
				/>
			</InstagramLogo>
			<InputWrapper>
				<button class="search-button" type="submit">
					<i class="fa fa-search" />
				</button>
				<input className="search-box" type="text" placeholder="Search..." />
			</InputWrapper>
			<IconWrapper>
				<i class="far fa-compass icons" />
				<i class="far fa-heart icons" />
				<i class="far fa-user icons" />
			</IconWrapper>
		</SearchBarHeader>
	)
}

export default searchbar
