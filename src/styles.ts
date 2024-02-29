import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    scrollbar-color: #b0babf rgba(60,70,78,.05);
    scrollbar-width: thin;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Inter;
    color: black;
  }
  :focus, :active {
    outline: none;
  }
  a:focus, a:active {
    outline: none;
  }
  nav, footer, header, aside {
    display: block;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  #root {
    position: relative;
    z-index: 1;
  }
  input::-ms-clear {
    display: none;
  }
  input, button, textarea {
    font-family: inherit;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a, a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`

export const AppWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  justify-content: space-between;
  min-height: 100vh;
`

export const Button = styled.button`
  font-weight: 600;
  background: #FF7051;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 2px 2px 0 0 black;
  padding: 12px;
  color: white;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  width: 100%;
  gap: 16px;
`