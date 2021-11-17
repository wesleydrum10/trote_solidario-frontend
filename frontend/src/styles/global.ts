import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-family: Arial, Helvetica, sans-serif;
    --backgroundLight: #f0f2f5;
    --backgroundDark: #000029;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #0d6efd;
    --gold: #d5b73d;
    --backgroundBody: #e8f1fa; 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 83.5%;
    }
  }

`