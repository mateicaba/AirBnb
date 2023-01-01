import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App/App";

const root = document.getElementById("root");

const main = createRoot(root);

main.render(<App />);
