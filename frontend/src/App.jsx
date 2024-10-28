// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello World!</h1>;
};
// modify the createRoot call, delete "ReactDOM"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);