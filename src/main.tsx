import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Teucard from './assets/cases/teucard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cases/teucard",
    element: <Teucard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
