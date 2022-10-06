import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import { persistor,store } from './Redux/store';
 import { PersistGate } from 'redux-persist/integration/react'
 import { BrowserRouter} from "react-router-dom"
 import {ApiiContextProvider}  from "./context/Apicontext";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      
    <BrowserRouter>
     < Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ApiiContextProvider >
       <App />
       </ApiiContextProvider>
      </PersistGate>
    </Provider>
    </BrowserRouter>
   </React.StrictMode>
);