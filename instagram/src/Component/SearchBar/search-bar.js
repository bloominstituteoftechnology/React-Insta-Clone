import React from "react";
import insta_text_logo from "../../images/instagram-text-logo.png";
import compass from "../../images/compass.png";
import insta_heart_logo from "../../images/Instagram-Heart.png";
import insta_person_logo from "../../images/Instagram-Person.png";
import insta_logo from "../../images/insta_logo.png";
import styled from 'styled-components';


const Header = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-evenly;
  background: #ffffff;
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 30px;
`;

const LogoImage = styled.img`
  border-right:1px solid black;
  padding: 5px;
`

const Input = styled.input`
height:30px;
width:150px;
border-radius:5%;
border:1px solid black;
font-size: 15px;
`
const Images = styled.div`
display:flex;
padding-right: 40px;
`

const Img = styled.img`
height:30px;
margin-left: 30px;
`

const SearchBar = (props) => {
    return (
        <Header>
            <div>
                <LogoImage src={insta_logo} />
                <img src={insta_text_logo} />
            </div>

            <form>
                <Input className="input" type="text" placeholder="Search" onKeyUp={props.search} />
            </form>

            <Images>
                <div>
                    <Img src={compass} />
                </div>
                <div>
                    <Img src={insta_heart_logo} />
                </div>
                <div>
                    <Img src={insta_person_logo} />
                </div>
            </Images>
        </Header>
    )
}


export default SearchBar;