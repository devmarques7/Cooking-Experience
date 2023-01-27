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

    --gutter: 20px;

    --color-remove: #B02E2E;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font-family:"Roboto",sans-serif;
  
  }


  button {
    cursor: pointer;
  }

`;
