import { createGlobalStyle } from "styled-components/macro";
import { primaryFont, headerFont } from "./typography";
import { normalize } from "polished";
import { typeScale } from "../utils";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *,*:before,*:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
    }

    main {
        width: 90%;
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5 {
        font-family: ${headerFont};
        letter-spacing: 1px;
    }

    h1 {
        font-size: ${typeScale.header1}
    }

    h2 {
        font-size: ${typeScale.header2}
    }

    h3 {
        font-size: ${typeScale.header3}
    }

    h4 {
        font-size: ${typeScale.header4}
    }

    .main {
        padding: 20px;
        min-height: 100vh;
    }

    .container {
        max-width: 1360px;
        margin: 0 auto;  
    }
`;
