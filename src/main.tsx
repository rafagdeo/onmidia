import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Importação necessária
import App from './App';
import Teucard from './assets/cases/teucard';
import Gonbank from './assets/cases/gonbank';
import Viz from './assets/cases/viz';
import Giter from './assets/cases/giter';
import About from './assets/pages/about';
import RuralSummit from './assets/audiovisual/RuralSummit';
import SynConsult from './assets/cases/SynConsult';
import Bauny from './assets/audiovisual/Bauny';
import BySolution from './assets/cases/BySolution';
import CourtSide from './assets/cases/CourtSide';
import Politica_de_privacidade from './assets/pages/Politica_de_privacidade';
import Termos_e_Condicoes from './assets/pages/Termos_e_Condicoes';
import Trafego_pago from './assets/pages/Trafego_pago';
import Audiovisual from './assets/pages/Audiovisual';
import Calin from './assets/cases/Calin';
import Equus from './assets/cases/Equus';
import Onpag from './assets/cases/Onpag';
import DPO from './assets/pages/DPO';
import Site from './assets/pages/Site';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/quem-somos", element: <About /> },
  { path: "/trafego-pago", element: <Trafego_pago /> },
  { path: "/audiovisual", element: <Audiovisual /> },
  { path: "/ruralsummit", element: <RuralSummit /> },
  { path: "/bauny", element: <Bauny /> },
  { path: "/bysolution", element: <BySolution /> },
  { path: "/teucard", element: <Teucard /> },
  { path: "/gonbank", element: <Gonbank /> },
  { path: "/viz", element: <Viz /> },
  { path: "/synconsult", element: <SynConsult /> },
  { path: "/giter", element: <Giter /> },
  { path: "/court-side", element: <CourtSide /> },
  { path: "/calin", element: <Calin /> },
  { path: "/cerveza-equus", element: <Equus /> },
  { path: "/onpag", element: <Onpag /> },
  { path: "/politica-de-privacidade", element: <Politica_de_privacidade /> },
  { path: "/termos-e-condicoes", element: <Termos_e_Condicoes /> },
  { path: "/encarregado-de-dados-dpo", element: <DPO /> },
  { path: "/site", element: <Site />}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
