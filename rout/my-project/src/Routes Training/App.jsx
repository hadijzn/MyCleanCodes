import React from 'react';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppRoutes />
        <nav>
          <Link to="/route2">to route 2</Link>
        </nav>
      </div>
      <Outlet/>
    </BrowserRouter>
  );
}
