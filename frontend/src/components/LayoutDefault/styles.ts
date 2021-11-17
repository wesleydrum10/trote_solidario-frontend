import styled from "styled-components";

export const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: 0;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 85vh auto;
  background-color: #e8f1fa;
  grid-template-areas: "header""section""section""footer";

  @media(min-width: 769px) {
    gap: 10px;
    grid-template-rows: 10vh 82vh auto;
    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "section"
                         "footer";
  }

`
export const Header = styled.header`
  grid-area: header;
    
`
export const Section = styled.section`
  grid-area: section;
  background-color: var(--backgroundLight);
  box-shadow: 0px 5px 10px #00000029;
  padding: 2px;
  height: 100%;
  justify-content: start;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media(min-width: 769px) {
    border-radius: 20px;
    padding: 0px 40px 0px 40px;
    margin: 10px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--backgroundDark);
  }
`
export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`
export const Container = styled.div`
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
export const Card1 = styled.div`
  display: flex;
  grid-area: card1; 
  width: 100%;
  padding: 10px;
  @media(min-width: 769px) {
    padding: 0;
  }
`
export const ShowButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px

`
export const ButtonLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  justify-content: flex-end;
`
export const ButtonRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  justify-content: flex-start;
`

