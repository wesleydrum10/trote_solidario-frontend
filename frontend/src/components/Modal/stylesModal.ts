import styled from "styled-components";

export const Form = styled.form`
  margin: 0 12px;
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid var(--backgroundDark);
    background: var(--backgroundLight);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-title);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--backgroundLight);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem; 
    transition: filter 0.2s;
    font-weight: 600;
    
    &:hover {
      filter : brightness(0.9)
    }
  }
`
export const Top = styled.div `
  display: flex;
  margin: 5px 15px;
  justify-content: space-between;

`