import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.documentElement.classList.add("no-transition");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(() => {
  document.documentElement.classList.remove("no-transition");
}, 100);
