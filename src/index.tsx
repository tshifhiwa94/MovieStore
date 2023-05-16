import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieProvider } from './providers/movies';
import { UserProvider } from './providers/users';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MovieProvider>
          <App />
      </MovieProvider>
    </UserProvider>
    
  </React.StrictMode>
);

