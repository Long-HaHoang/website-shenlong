import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --foreground-rgb: 0, 0, 0;
    --background-rgb: 255, 255, 255;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-rgb: 0, 0, 0;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    height: 100%;
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header {
    padding: 1rem;
  }

  h1 {
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    font-size: 1.2rem;
  }

  main > p {
    text-align: center;
  }

  main > ul {
    padding: 1rem;
    width: 40%;
    min-width: 300px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default createGlobalStyle`${globalStyle}`;
