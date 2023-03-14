import React from 'react';
import { useRoutes } from 'react-router-dom';
import CrewPage from './pages/crewPage';
import Dashboard from './pages/dashboard/Dashboard';
import DestinationPage from './pages/destinationPage';

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dest',
            element: <DestinationPage />
        },
        {
            path: '/crew',
            element: <CrewPage />
        }
    ])
  return routes
}
