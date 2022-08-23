import React from 'react';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Routes from './routes';

function App() {
  return (
    <ShoppingCartProvider>
      <Routes />
    </ShoppingCartProvider>
  );
}

export default App;
