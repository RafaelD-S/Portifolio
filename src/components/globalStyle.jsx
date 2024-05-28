import {createGlobalStyle, styled} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Raleway, sans-serif;
        color: #212529;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #fff;
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 3.25rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1rem;
    }

    @media(max-width: 935px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`