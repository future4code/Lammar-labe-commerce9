import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  font-family: "Poppins", sans-serif;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: inset;
  display: block;
  padding: inherit;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  div {
    margin-left: 10px;
    min-width: fit-content;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(231, 38, 38);
  background: transparent;
  border: 1px solid rgb(231, 38, 38);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

export const Finalizar = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: rgb(255, 101, 0);
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  cursor: pointer;
  :hover {
      background-image: linear-gradient(
        to right,
        #e7484f,
        #e7484f 16.65%,
        #f68b1d 16.65%,
        #f68b1d 33.3%,
        #fced00 33.3%,
        #fced00 49.95%,
        #009e4f 49.95%,
        #009e4f 66.6%,
        #00aac3 66.6%,
        #00aac3 83.25%,
        #732982 83.25%,
        #732982 100%,
        #e7484f 100%
      );
      animation: slidebg 2s linear infinite;
    }

    @keyframes slidebg {
      to {
        background-position: 20vw;
      }
    }
`;
