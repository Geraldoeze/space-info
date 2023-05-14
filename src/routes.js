import React from 'react';
import { useRoutes } from 'react-router-dom';
import CrewPage from './pages/crewPage';
import Dashboard from './pages/dashboard/Dashboard';
import DestinationPage from './pages/destinationPage';
import TechPage from './pages/techPage';

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Dashboard  />
        },
        {
            path: '/dest',
            element: <DestinationPage />
        },
        {
            path: '/crew',
            element: <CrewPage />
        },
        {
            path: '/tech',
            element: <TechPage />
        }
    ])
  return routes
}
