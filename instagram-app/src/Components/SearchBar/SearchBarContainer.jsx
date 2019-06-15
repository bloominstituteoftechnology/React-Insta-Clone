import './Search.css'
import SearchBar  from '../SearchBar/SearchBar'
import React from 'react'
import styled from 'styled-components'


const SearchBardiv = styled.div`
margin: 0 auto;
width: 99.5%;
height: 80px;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
background-color: aliceblue;
margin-top: 0.2%;
margin-bottom: 2%;
display: flex;
align-items: center;

button{
  background-color: black;
  color: white;
}
  `

const ClearUser=(e)=>{
  
  window.localStorage.removeItem('user');
  window.location.reload();
};

export default function SearchBarContainer(props) {
  console.log( props)
  return (
    <SearchBardiv >
      <SearchBar searchfn ={props.searchfn} />
      <button onClick={ClearUser}>Logout</button>
    </SearchBardiv>
  )
}
