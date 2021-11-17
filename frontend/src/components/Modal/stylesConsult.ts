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