import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootStoreProvider } from './store/index.tsx';

import './index.css';

// const elem = document.getElementById('root');

const container = document.getElementById('root');
const root = createRoot(container!);
// createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </Router>
);