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

export const Wrapper = styled.div`

display : flex;
flex-direction : column;
align-items : center;

> p {
    color : white;
}

.score {
    color : white;
    font-size : 2rem;
    margin : 0;
}

h1 {
    font-family : sans-serif;
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
    background-size : 100%;
    backgound-clip : text;
    filter : drop-shadow(2px 2px #0085a3);
     font-size : 70px;
     text-align : center;
     margin: 20px;
}

.start, .next {
    cursor : pointer;
    backgound : green;
    border: 2px solid #d38558;
    box-shadow : 0px 5px 10px rgba( 0, 0 , 0 , 0.25);
    border-radius : 10px;
    margin : 20px 0;
    padding : 10px 40px;
}

.start {
    max-width : 200px;
}
`