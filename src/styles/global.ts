import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
    }

    body {
        background-color: ${props => props.theme.background} ;
    }

    button{
        background-color: inherit;
        cursor: pointer;

        &:disabled{
            cursor: not-allowed ;
        }
    }
`