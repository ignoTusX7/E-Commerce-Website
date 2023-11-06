import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import {Provider} from 'react-redux'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <Provider store={store}> 
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
        </Provider>
  </React.StrictMode>
);
