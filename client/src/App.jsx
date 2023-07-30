import React, { useState, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

import Home from './TradeMachine/Home.jsx'

function App () {

  return (
    <Home />
  )
}

root.render(<App />)
