import styled from "styled-components";

export const Btn = styled.div`
  display: inline-flex;
  justify-content: center;

  button {
    font-weight: 500;
    line-height: 1.5;
    color: var(--backgroundLight);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .35rem;
    transition: .2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

`
export const BtnPrimary = styled.div`
  display: inline-flex;
  justify-content: center;

  button {
    font-weight: 500;
    line-height: 1.5;
    color: var(--backgroundLight);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: var(--blue);
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .35rem;
    transition: .2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

`