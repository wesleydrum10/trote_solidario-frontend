import styled from "styled-components";

export const CardL = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: .25rem;
  margin: 5px;
  box-shadow: 0 5px 5px var(--backgroundDark);
  padding: 10px;
  border-radius: 10px;
  color: var(--backgroundDark);
  font-weight: 600;
  cursor: pointer;
  border: 2px solid transparent;

  @media(min-width: 769px) {
    box-shadow: 0 5px 5px var(--gold);
    color: var(--gold);
    height: 100%;
  }

  &:hover {
    border: 2px solid var(--gold);
  }

  @media(min-width: 769px) {
    height: 28vh;
  }

`
export const Icon = styled.i`
  color: var(--gold);
  font-size: 2.5rem;

`
export const TitleCard = styled.p`
  font-size: 1em;
  
`
export const Description = styled.p`
  font-size: 1rem;
  letter-spacing: 0;
  text-align: center;
  margin-top: 1.5em;

`
export const Next = styled.div`
  display: none;
  
  @media(min-width: 769px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
  }

`
