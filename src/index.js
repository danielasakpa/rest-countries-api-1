import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import React from "react";
import {Helmet} from "react-helmet";


import App from "./App"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <div>
    <Helmet>
      <style>{"body { background-color: hsl(207, 26%, 17%);, font-size: 0.8750em	 }"}</style>
    </Helmet>
    <App/>
  </div>
  </StrictMode>
);