import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import layouts from './layout';

function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App