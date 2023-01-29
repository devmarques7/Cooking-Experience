import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --land-title: #fff;
    --land-subText: #fff;

    --land-button:#43260E; 
    --land-button-text:#fff; 

    --land-nav-title: #fff;
    --land-nav-link:#fff;

    --home-video-text: #fff;
    --home-video-input-color: #fff;
    --home-video-border-input: #fff;
    --home-video-icon: #fff;

    --home-carrosel-background-color: #090909;

    --home-card-description: #fff;

    --home-recipe-description-title: #fff;
    --home-recipe-description-category: #fff;
    --home-recipe-description-details: #fff;


    --footer-background:#000;
    --footer-acknowledgment:#fff;
    --footer-reference:#fff;
    --footer-userName:#fff;
    --footer-instagram: #cf50ac;
    --footer-github:#6d0052;
    --footer-linkedin:#0e76a8;


  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *::after, *::before{
    box-sizing: border-box;
  }

  body, input, button {
    font-family:"Roboto",sans-serif;
  
  }


  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;
