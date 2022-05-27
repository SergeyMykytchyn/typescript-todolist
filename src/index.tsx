import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App/App";
import { StoreContextProvider } from 'context/StoreContext';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);
