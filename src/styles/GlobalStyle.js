import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root{
   --black: #000;
   --grey: #333;
   --white: #d9d9d9;
   --blue: #1b9se0;
 }

 div {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background-color: var(--black);
   color: var(--white);
 }
`;
