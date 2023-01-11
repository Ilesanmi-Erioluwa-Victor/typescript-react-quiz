import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `

html {
    height : 100%;
}

body {
background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
backgound-size : cover;
margin : 0;
padding : 0 20px;
display : flex;
justify-content : center;


* {
    box-sizing : border-box;
    font-family : "Catamaran", sans-serif;
}
`