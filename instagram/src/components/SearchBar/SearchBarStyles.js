import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  height: 40px;
`

export const Text = styled.p`
  font-size: 3.6rem;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid black;
  font-family: 'Grand Hotel', cursive;
`

export const Form = styled.form`
  position: relative;
`

export const Input = styled.input`
  padding: 5px 10px;
  font-size: 1.6rem;
`

export const Placeholder = styled.div`
  font-size: 1.6rem;
  position: absolute;
  display: ${({ focused }) => focused ? 'none' : 'flex'}
  align-items: center;
  width: fit-content;
  height: fit-content;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`
