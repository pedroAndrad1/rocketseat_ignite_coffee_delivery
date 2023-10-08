import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        transition: all 0.3s;
    }

    body {
        background-color: ${(props) => props.theme.background} ;
        font-family: 'Roboto', 'sans-serif' ;
    }

    button, a{
        background-color: inherit;
        cursor: pointer;

        &:disabled{
            cursor: not-allowed ;
        }
    }

    
    a{
        text-decoration: none;
        color:${(props) => props.theme['base-text']}
    }

    h1 {
        font-size: 2rem;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 2rem;
    }

    ul{
        list-style-type: none;
    }
`
