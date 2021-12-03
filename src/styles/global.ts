import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --shape: #FFFFF;

        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --red: #E62E4D;

        --text-title: #363F5F;
        --text-body: #969CB3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Por padrão, o font-size = 16px
    // REM => 1rem = 16px => que agora variam de acordo com o tamanho da tela
    html { 
        @media (max-width: 1080px) { //caso a tela do usuario for menor que 1080px
            font-size: 93.75%;       //diminui a fonte -> resulta em 15px
        }
        @media (max-width: 720px) { //caso a tela do usuario for menor que 720px
            font-size: 87.5%;       //diminui a fonte -> resulta em 14px
        }
    }

    body {
        background-color: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`