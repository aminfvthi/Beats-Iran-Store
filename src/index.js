import React from "react";
import ReactDOM from "react-dom/client";
import { StateContextProvider } from "./contexts/ContextProvider";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
