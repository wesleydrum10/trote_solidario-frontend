import styled from "styled-components";

export const Body = styled.body`
  margin: 5px;
  padding: 0;
  box-sizing: 0;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75vh auto;
  background-color: #e8f1fa;
  grid-gap: auto;
  grid-template-areas: "section" "main";

  @media(min-width: 769px) {
    grid-template-rows: 85vh;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "section section main";
  }

`
export const Main = styled.main `
  grid-area: main;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  margin: 5px;
  gap: 1px;
  border-radius: 10px;
  height: 100%;
  padding-bottom: 5px;
  padding-top: 1px;

  @media(min-width: 769px) {
    flex-direction: column;
    background-color: #000029;
    height: auto;
    margin: 10px;
  }

`
export const Container = styled.div `
  width: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  height: auto;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "card1 card2";
  overflow: auto;
  @media(min-width: 769px) {
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "card1 card2";
    align-items: flex-start;
  }

`
export const Card1 = styled.div `
  display: flex;
  grid-area: card1; 

`
export const Card2 = styled.div `
  display: flex;
  grid-area: card2;

`
export const Box1 = styled.div `
  display: flex;
  grid-area: card2;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }

`
export const Box2 = styled.div `
  display: flex;
  grid-area: card2;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }

`
export const Box3 = styled.div `
  display: flex;
  grid-area: card2;
  height: 75%;
  @media(min-width: 769px) {
    height: auto;
  }
`
export const ShowButton = styled.div `
  display: flex;
  gap: 2px;
  margin-top: .2rem;
  @media(min-width: 769px) {
    margin-top: -10rem;
  }

`
export const ButtonLeft = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  justify-content: flex-end;
`
export const ButtonRight = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  justify-content: flex-start;
`