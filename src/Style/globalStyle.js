import { createGlobalStyle } from "styled-components";
import "./cores.css";
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
p{
  color:var(--main-1);
  
}
img {
  height: 100%;
  width: 100%;
 
}


`;
export default GlobalStyle;
