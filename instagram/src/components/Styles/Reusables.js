import styled from 'styled-components';

// Post Container, Post, etc.
const StyledPostContainer = styled.div`
  width: 604px;
  height: auto;
  margin: 30px auto;
  border: 1px solid rgb(189, 189, 189);
  .post{
    width: 100%;
    margin: 0 auto;
    img{
      max-width: 100%;
      height: auto;
    }
    .post-header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 75px;
        img{
            border-radius: 50%;
            max-width: 100%;
            height: 35px;
            margin: 10px;
        }
    }
  }
  .comment-section{
    width: 95%;
    margin: 0 auto;
    p{
      margin: 7px 0;   
    }
    input{
      width: 100%;
      border: 0;
      padding: 15px 0;
      font-size: .9rem; 
    }
    .add-comment{
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid black;
    }
  }
`
// Action Buttons on Posts
const ActionButtons = styled.div`
    display:flex;
    font-size: 1.5rem;
    margin: 10px 0;
    i{
     margin: 0 10px 0 0;
    }
`
// Search Bar Styled Components
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;;
  border-bottom: 1px solid grey;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 50px;
  position: relative;
`;
const LogoImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i{
        width: 25%;
        text-align: center;
        align-self: center;
        font-size: 2.5rem;
        border-right: 1px solid grey;
        margin: 0 5px 0 10px;
        padding-right: 15px;
        &:hover{
            cursor: pointer;
        }
    }
    img{
        height: 40px;
        max-width: 75%;
        margin-left: 10px;
        &:hover{
            cursor: pointer;
        }
    }
`;
const StyledSearchInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input{
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
  }
`
const NavLogos = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end;
  i{
      margin: 0 20px;
      &:hover{
          cursor: pointer;
      }
  }
`
// Login Styles

const StyledLogin = styled.div`
  display: flex;
  width: 70%;
  margin: 150px auto;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  img{
    height: auto;
    max-width: 100%;
  }
  form{
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
  }
`
// Utilities

const StyledImg = styled.img`
   max-width: 100%;
   height: auto;
`
const IgLogo = styled(StyledImg)`
  width: 50%
`


// Exports
export {StyledPostContainer, NavLogos, StyledSearchInput, LogoImage, Header, ActionButtons, StyledLogin, StyledImg, IgLogo}

