import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizung: border-BaseAudioContext;
        outline: none;
    }

body {
    backgroud: ${({theme}) => theme.colors["base-background"]}
    color:  ${({theme}) => theme.colors["base-text"]}
    -webkit-front-smoothing: antialiased;
}

bod, input, textarea, button {
    font-family: ${({theme}) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]}
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;
