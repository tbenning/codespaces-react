import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@primer/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <body
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        <App />
      </body>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
