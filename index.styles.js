import { createGlobalStyle } from 'styled-components';

const randomNumber = Math.floor(Math.random() * 20) * 10 + 50;
const randomColor = `rgb(255, 165, ${randomNumber})`;

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126 License: none (public domain) */


    html, body, div, p, blockquote, a, em{
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */

    body {
	    line-height: 1;
        font-family: 'Bebas Neue', cursive;
        height: 100vh;
        background-color: ${randomColor};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    blockquote, q {
	    quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
	    content: '';
	    content: none;
    }

`;
