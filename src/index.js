import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
