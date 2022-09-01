import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//   const [todoList, setTotoList] = React.useState([]);
//   const [input, setInput] = React.useState("");
//   const [editble, setEditble] = React.useState(false);
//   const textInput = React.useRef(null);
//   const [id, setId] = React.useState();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
