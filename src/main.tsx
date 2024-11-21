import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Importaciones de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Íconos sólidos
import { far } from '@fortawesome/free-regular-svg-icons'; // Íconos regulares
import { fab } from '@fortawesome/free-brands-svg-icons'; // Íconos de marcas

import "@fortawesome/fontawesome-free/css/all.min.css";

// Agregar íconos a la biblioteca global
library.add(fas, far, fab);
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
