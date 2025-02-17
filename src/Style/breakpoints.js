const tamanho = {
  xs: "360px",
  s: "500px",
  m: "760px",
  l: "1180px",
};

//quando eu chamar o breakpoints ele ira buscar o dado da variavel tamanho
// exemplo: @media(breakpoints.xs){}
const breakpoints = {
  xs: `(max-width:${tamanho.xs})`,
  s: `(max-width:${tamanho.s})`,
  m: `(max-width:${tamanho.m})`,
  l: `(max-width:${tamanho.l})`,
};

export default breakpoints;
