import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css'
import { AuthProvider } from './providers/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);

