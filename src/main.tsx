import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GenreProvider } from './contexts/GenresContext.tsx';
import { SearchResultProvider } from './contexts/searchFilter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchResultProvider>
        <GenreProvider>
          <App />
        </GenreProvider>
      </SearchResultProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
