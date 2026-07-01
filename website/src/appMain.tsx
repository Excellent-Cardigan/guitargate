import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import AppOnly from './AppOnly';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppOnly />
  </StrictMode>
);
