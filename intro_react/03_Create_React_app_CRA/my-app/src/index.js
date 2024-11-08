import React from "react"; // it available in nod-module
import ReactDOM from "react-dom/client";
import App from "./App";

function Hello() {
  return (
    <> 
      <h1>Hello World !</h1>
      <p>This is para</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);