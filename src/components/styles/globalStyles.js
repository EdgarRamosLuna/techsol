import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    /*margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;*/
    overflow-y: ${props => props.isModal ? "hidden":""};
    
  }
  
  @font-face {
        //    font-family: 'AB';
      //      src:url('assets/fonts/Asap-Bold.otf');
    }
  
    *{
   //     font-family: 'AB';
    }
 /* @font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot');
  src: url('../fonts/fontawesome-webfont.eot') format('embedded-opentype'), 
  url('../fonts/fontawesome-webfont.woff2') format('woff2'), 
  url('../fonts/fontawesome-webfont.woff') format('woff'), 
  url('../fonts/fontawesome-webfont.ttf') format('truetype'), 
  url('../fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}*/
`;
 
export default GlobalStyle;