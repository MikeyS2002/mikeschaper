import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background:#2C2F33;
    background-repeat: no-repeat;
    font-family: 'Inter', sans-serif;
    color: white;
    overflow-x: hidden;
    @media screen and (max-width: 800px) {
    font-size: 90%;
  }
}
h2 {
    font-size: 3rem;
    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }
}
h3 {
    font-size: 1.3rem;
}
p {
    font-size: 1.2rem;
}
a{
    text-decoration: none;
}
hr {
    width: 12%;
    @media screen and (max-width: 800px) { 
        width: 18%;
    }
    @media screen and (max-width: 500px) { 
        width: 21%;
    }
  height: 0.35rem;
  background: #f0db4f;
  border: none;
  margin: 0.5rem 0 2rem 0;
}

`;

export default GlobalStyle;
