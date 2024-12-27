import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/normalize.css';
import { Container } from './components/container/Container';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container></Container>
  </StrictMode>,
)
