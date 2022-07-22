import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  font-family: "Poppins", sans-serif;
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;
  gap: 10px;
`

export const P = styled.p`
  display: flex;
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: gray;
    color: whitesmoke;
  }
`