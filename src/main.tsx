import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Teucard from './assets/cases/teucard'
import Gonbank from './assets/cases/gonbank'
import Viz from './assets/cases/viz'
import Giter from './assets/cases/giter'
import About from './assets/pages/about'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/quem-somos",
    element: <About />
  },
  {
    path: "/cases/teucard",
    element: <Teucard />
  },
  {
    path: "/cases/gonbank",
    element: <Gonbank />
  },
  {
    path: "/cases/viz",
    element: <Viz />  
  },
  {
    path: "/cases/giter",
    element: <Giter />  
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
