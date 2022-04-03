import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        border:none;
        outline: none;
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
`;

export default GlobalStyle;
