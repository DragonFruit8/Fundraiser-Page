import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
  }

  nav {
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }

  nav a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.2rem;
  }

  nav a:hover {
    text-decoration: underline;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  h1 {
    color: #333;
  }

  button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export default GlobalStyle;
