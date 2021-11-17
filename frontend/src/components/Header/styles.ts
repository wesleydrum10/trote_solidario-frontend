import styled from "styled-components";

export const Container = styled.header `
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #000029;
  color: var(--gold);
  font-size: 1.5rem;

`
export const NavDesktop = styled.nav `
  display: none;

  @media(min-width: 769px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  
`
export const NavMobile = styled.nav `
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media(min-width: 769px) {
    display: none;
  }

`
export const CardMenu = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;

`
export const CardTitle = styled.div `
  display: flex;
  justify-content: center;
  margin-right: 15%;
  width: 85%;

`

export const TitleCard = styled.p`
  color: var(--gold);
  border-bottom: 2px solid transparent;
  margin: 10px;
  padding: 0 10px;
  border-radius: 6px;

  &:hover {
    border-bottom: 2px solid var(--gold);
  }

`
export const Icon = styled.i`
  color: var(--gold);
  font-size: 2.5rem;

`

export const Logoff = styled.div `
  display: none;

  @media(min-width: 769px) {
    width: 3%;
    display: flex;
    align-items: center;
    div {
      border-radius: 50%;
      height: 30px;
      border: 2px solid transparent;
      &:hover {
        border:  2px solid var(--gold);
      }
    }
  }

`