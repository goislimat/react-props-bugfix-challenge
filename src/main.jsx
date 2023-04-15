import React from "react";
import ReactDOM from "react-dom/client";
import Character from "./components/Character";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Character name="Gandalf" />
  </React.StrictMode>
);
