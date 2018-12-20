import styled from "styled-components";
import { FlexDiv, InputBox } from './basicStyles';

export const Container = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 20px 0;
  background-color: white;
  ${props => (props.fixed ? `position: fixed; top: 0; ` : null)}
`

export const Header = styled(FlexDiv)`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`

export const Logo = styled.div`
  border-right: 2px solid lightgray;
  font-size: 3rem;
  padding-right: 10%;
  color: black;
  @media (max-width: 800px) {
    font-size: 2.2rem;
  }
`

export const AppName = styled.div`
  margin: 0 10%;
  font-size: 2.5rem;
  font-family: 'Lobster', cursive;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
export const SearchInput = styled(InputBox)`
  text-align: center;
  border-radius: 5px;
  @media (max-width: 800px) {
    padding: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const IconGroup = styled(FlexDiv)`
  width: 30%;
  @media (max-width: 600px) {
    width: 50%;
  }
`

export const IconLink = styled.div`
  font-size: 2rem;
  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`

