import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  width: 100vw;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--text-body);
      font-weight: 600;
      min-width: 100px;
      padding: .5rem 1rem;
      text-align: left;
      line-height: 1;
    }
    td {
      padding: 1rem 1rem;
      border: 0;
      line-height: 1.2;
      background: var(--backgroundBody);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
  }
`
export const Top = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem; 

`
export const BoxNoData = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;

  p {
    color: var(--backgroundDark);
    font-size: 1.2rem;

    @media(min-width: 769px) {
      font-size: 2rem;
    }
  }

`