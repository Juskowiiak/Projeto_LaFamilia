import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
  list-style: none;
  text-decoration: none;
}
html{
   background:#fff !important;
}
body {
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  
 
}

img {
  height: 100%;
  width: 100%;
  border:1px solid cyan;
}
`;
export default GlobalStyle;
