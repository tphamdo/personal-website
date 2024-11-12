import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './about.tsx';
import Work from './work.tsx';
import Project from './project.tsx';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Work />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/work/:projectName',
    element: <Project />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
