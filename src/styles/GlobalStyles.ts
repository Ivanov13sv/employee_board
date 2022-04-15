import { createGlobalStyle } from "styled-components";
import 'normalize.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.colors.bg};
    }
`