
import styled from 'styled-components'

export const WrapperDiv = styled.div `
  width: 100%;

  ${props => (props.post ? `
    max-width: 500px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;`
  : null)}

  ${props => (props.searchBar ? `
    margin: 0;
    width: 100%;
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e6e6e6;
    padding: 20px 15px;
    z-index: 10;`
  : null)}

  ${props => (props.commentSection ? `
    padding: 0% 2%;
    width: 95%;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1.2rem;`
  : null)}

  ${props => (props.login ? `
    max-width: 300px;
    width: 100%;
    height: 200px;
    margin: 20% auto;
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    jusify-content: space-between;
    align-items: center;
    background-color: white;
    border: 1px solid #E6E6E6;`
  : null)}
`;

export const ContainerDiv = styled.div `
  ${props => (props.search ? `
    width: 33%; ` : null)}

  ${props => (props.logo ? `
    width: 33%;
    cursor: pointer` : null)}

  ${props => (props.icons ? `
    width: 30%;
    margin: 1%;
    display: flex;
    justify-content: space-around;`: null)}

  ${props => props.post ? `
    display: flex;
    flex-wrap: wrap;
    align-items: center;` : null}

  ${props => props.postIcons ? `
    margin-top: 2.5%;
    width: 15%;
    display: flex;
    justify-content: space-around;` : null}

    ${props => (props.timestamp ? `
      margin: 1% 0;
      font-size: 1rem;
      color: #999999;` : null)}
`;

export const StyledInput = styled.input `
  :focus{
    outline: none;
  }

  ${props => (
  props.name === 'newComment' ? `
    margin-top: 1%;
    width: 100%;
    border: none;
    border-top: 1px solid #999999;
    font-size: 1.6rem;
    padding: 3% 0;
    font-color: #999999;`
  : null)}

  ${props => ( props.name === 'search' ? `
    padding: 3px;
    width: 70%;
    text-align: center;
    margin: 2px;
    border-radius: 3px;
    border: 1px solid #E6E6E6;
    background-color: #FAFAFA;`
  : null)}

    ${props => ((props.name === 'username') || (props.name === 'password') ? `
    border: 1px solid #E6E6E6;
    width: 100%;
    padding:3% 0;
    margin-top: 3%;
    border-radius: 3px;
    text-align: center;
    background-color: #FAFAFA;
    color: #99A5C2;`
  : null)}
`;

export const StyledButton = styled.button `
  ${props => (props.login ? `
    border-radius: 3px;
    border: none;
    background-color: #3195F3;
    margin-top: 5%;
    width: 100%;
    padding: 3%;
    cursor: pointer;
    color: white;
    font-weight: bold;`
  : null)}
`;

export const StyledParagraph = styled.p `
  ${props => (props.likes ? `
    margin: 1% 2%;
    font-size: 1.4rem;` : null)}

  ${props => (props.comment ? `
    line-height: 1.7;`
  : null)}

  ${props => (props.postHeader ? `
    font-size: 1.4rem;`
  : null)}


`;

export const StyledImage = styled.img `
  ${props => (props.post ? `
    width: 500px;`
  : null)}

  ${props => (props.postuser ? `
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 2%;`
  : null)}
`;

export const StyledForm = styled.form `
  ${props => (props.login ? `
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;`
  : null)}
`;
