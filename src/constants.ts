import { createGlobalStyle } from "styled-components";

const Colors = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  DIM: "rgba(0, 0, 0, 0.7)",
  BROWN: "#864D12",
  NAVY: "#001B58",
  ERROR: "#B43E3E",
};

// Usual breakpoints
// 480px
// 768px
// 896px
// 1200px

// @media only screen and (max-width: 1200px) {
// }
//
// @media only screen and (max-width: 896px) {
// }
//
// @media only screen and (max-width: 768px) {
// }
//
// @media only screen and (max-width: 480px) {
// }

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: grey;
    width: 100vw;
    min-height: 100vh;
    
    // base font-size
    font-size: 16px;
  }

  .header-text-size {
    font-size: 6em;

    @media only screen and (max-width: 896px) {
      text-wrap: break-word;
      font-size: 4em;
    }

    @media only screen and (max-width: 480px) {
      text-wrap: break-word;
      font-size: 3em;
    }
  }

  .subheader-text-size {
    font-size: 4em;

    @media only screen and (max-width: 896px) {
      text-wrap: break-word;
      font-size: 3em;
    }

    @media only screen and (max-width: 480px) {
      text-wrap: break-word;
      font-size: 2em;
    }
  }

  .nav-text-size {
    font-size: 1.2em;
  }

  .section-text-size {
    font-size: 2em;

    @media only screen and (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  .body-text-size {
    font-size: 1.3em;

    @media only screen and (max-width: 896px) {
      font-size: 1em;
    }
  }

  .secondary-text-size {
    font-size: 0.8em;
  }
`;

export { Colors, GlobalStyle };
