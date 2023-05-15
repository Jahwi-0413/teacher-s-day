import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesSetup from './routesSetup';

function App() {
  return (
    <BrowserRouter> <RoutesSetup></RoutesSetup></BrowserRouter>
  );
}

export default App;
