import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* importo o ficheiro css, onde terá o reset style */
import GlobalStyle from "./Style/globalStyle";
/* import o ficheiro responsavel pela circulacao das paginas */
import Rotas from "./Rotas/rotas";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </StrictMode>
);
