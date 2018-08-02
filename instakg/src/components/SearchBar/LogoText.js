import styled from "styled-components";


const LogoText = styled.span`
font-size: ${props => props.size ? props.size : '20px'};
font-family: "Press Start 2P", cursive;
font-weight: bold;
background-color: white;
border-radius: 5px;
padding: ${props => props.size ? (parseInt(props.size, 10) / 2) +'px '+ (parseInt(props.size, 10) / 3) +'px '+ (parseInt(props.size, 10) / 3) +'px' : '10px'}
min-width: 130px;
box-shadow: ${props => props.size ? '0 0 10px 3px #181816' : '0 0 3px 1px #181818'} ;
/* https://stackoverflow.com/questions/13607117/css-css3-pixelate-dot-background */
background-image: -moz-linear-gradient(45deg, #666 25%, transparent 25%),
  -moz-linear-gradient(-45deg, #666 25%, transparent 25%),
  -moz-linear-gradient(45deg, transparent 75%, #666 75%),
  -moz-linear-gradient(-45deg, transparent 75%, #666 75%);
background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, #666),
    color-stop(0.25, transparent)
  ),
  -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, #666), color-stop(0.25, transparent)),
  -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, #666)),
  -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, #666));
background-image: -webkit-linear-gradient(45deg, #666 25%, transparent 25%),
  -webkit-linear-gradient(-45deg, #666 25%, transparent 25%),
  -webkit-linear-gradient(45deg, transparent 75%, #666 75%),
  -webkit-linear-gradient(-45deg, transparent 75%, #666 75%);
background-image: -o-linear-gradient(45deg, #666 25%, transparent 25%),
  -o-linear-gradient(-45deg, #666 25%, transparent 25%),
  -o-linear-gradient(45deg, transparent 75%, #666 75%),
  -o-linear-gradient(-45deg, transparent 75%, #666 75%);
background-image: linear-gradient(45deg, #666 25%, transparent 25%),
  linear-gradient(-45deg, #666 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #666 75%),
  linear-gradient(-45deg, transparent 75%, #666 75%);
-moz-background-size: 2px 2px;
background-size: 2px 2px;
-webkit-background-size: 2px 2.1px; /* override value for webkit */
background-position: 0 0, 1px 0, 1px -1px, 0px 1px;

`
  


export default LogoText;
