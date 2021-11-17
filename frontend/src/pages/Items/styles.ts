import styled from "styled-components";

export const Body = styled.body`
  margin: 5px;
  padding: 0;
  box-sizing: 0;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75vh auto;
  background-color: var(--backgroundBody);
  grid-gap: auto;
  grid-template-areas: "section" "main";

  @media(min-width: 769px) {
    grid-template-rows: 85vh;
    grid-template-columns: 1fr;
    grid-template-areas: "section";
  }

`
export const Container = styled.div `
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: auto;
  @media(min-width: 769px) {
    justify-content: start;
    height: 100%;
  }

`
export const Card1 = styled.div `
  display: flex;
  grid-area: card1; 
  width: 100%;
  padding: 10px;
  @media(min-width: 769px) {
    padding: 0;
  }
`
export const Box1 = styled.div `
  display: flex;
  grid-area: card1;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }

`
export const Box2 = styled.div `
  display: flex;
  grid-area: card1;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }

`
export const Box3 = styled.div `
  display: flex;
  grid-area: card1;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }
`