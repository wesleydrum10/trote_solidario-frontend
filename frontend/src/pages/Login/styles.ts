import styled from 'styled-components';

export const Body = styled.body`
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: 0;
  width: 100%;
  color: #d5b73d;
  background: #000029;

`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Logo = styled.div`
  display: flex;
  height: auto;
  margin: 0 0 50px 0;

`

export const Img = styled.img`
  height: 220px;
  width: auto;

`

export const Forms = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 21.87rem;

`
export const Content = styled.div`
  flex: 0 0 auto;
  width: 100%;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-top: 10px;
  font-size: 1em;

`
export const Input = styled.input`
  background-color: #000029;
  border: none;
  border-bottom: 2px solid #d5b73d;
  color: #d5b73d;
  border-radius: 0;
  width: 100%;
  padding: 0 0 5px 10px;
  font-size: 1em;
  margin: 20px 0 5px 0;

  &:focus {
    background-color: #000029;
    color: #d5b73d;
    outline: none;
    border-bottom: 1px solid #d5b73d;
  }

`
export const Span = styled.span`
  display: flex;
  justify-content: center;
  font-size: .8em;
  color: #d5b73d;

`
export const Button = styled.button`
  width: 100%;
  background-color: #d5b73d;
  border-radius: 80px;
  font-weight: 600;
  height: 40px;
  border: 4px solid #00000029;
  box-shadow: 0px 3px 3px 0px #000029;
  transition: 0.2s;
  margin-top: 30px;
  font-size: 1em;

  &:hover {
    filter: brightness(0.8);
    border: 4px solid #000029;
  }

`
export const Icons = styled.div `
  display: flex;
  gap: 5px;
  margin-bottom: 20px;

`
