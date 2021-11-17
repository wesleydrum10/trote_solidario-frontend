import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 10px;
  width: auto;
  height: 85vh;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-areas: "card1" "card2" "card3" "card4";
  overflow: auto;
  @media(min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "card1 card2" "card3 card4";
  }

`
export const Card1 = styled.div`
  display: flex;
  grid-area: card1;
  height: 100%;
`
export const Card2 = styled.div`
  display: flex;
  grid-area: card2;

`
export const Card3 = styled.div`
  display: flex;
  grid-area: card3;

`
export const Card4 = styled.div`
  display: flex;
  grid-area: card4;

`

