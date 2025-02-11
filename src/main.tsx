import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Teucard from './assets/cases/teucard'
import Gonbank from './assets/cases/gonbank'
import Viz from './assets/cases/viz'
import Giter from './assets/cases/giter'
import About from './assets/pages/about'
import RuralSummit from './assets/audiovisual/RuralSummit'
import SynConsult from './assets/cases/SynConsult'
import Bauny from './assets/audiovisual/Bauny'
import BySolution from './assets/cases/BySolution'
import CourtSide from './assets/cases/CourtSide'
import Politica_de_privacidade from './assets/pages/Politica_de_privacidade';
import Termos_e_Condicoes from './assets/pages/Termos_e_Condicoes';

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
    path: "/ruralsummit",
    element: <RuralSummit />
  },
  {
    path: "/bauny",
    element: <Bauny />
  },
  {
    path: "/bysolution",
    element: <BySolution />
  },
  {
    path: "/teucard",
    element: <Teucard />
  },
  {
    path: "/gonbank",
    element: <Gonbank />
  },
  {
    path: "/viz",
    element: <Viz />
  },
  {
    path: "/synconsult",
    element: <SynConsult />  
  },
  {
    path: "/giter",
    element: <Giter />  
  },
  {
    path: "/court-side",
    element: <CourtSide />  
  }
  ,
  {
    path: "/politica-de-privacidade",
    element: <Politica_de_privacidade />  
  }
  ,
  {
    path: "/termos-e-condicoes",
    element: <Termos_e_Condicoes />  
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
